use actix_web::{get, middleware, post, web, App, Error, HttpResponse, HttpServer, Result};
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};
use std::env;

mod actions;
mod models;
mod schema;

type DbPool = r2d2::Pool<ConnectionManager<SqliteConnection>>;

/// Populate all downloads by name.
#[get("/download/{name}")]
async fn get_downloads_by_name(
    pool: web::Data<DbPool>,
    name: web::Path<String>,
) -> Result<HttpResponse, Error> {
    let download_name = name.into_inner();
    let download_name_tmp = download_name.clone();

    // use web::block to offload blocking Diesel code without blocking server thread
    let downloads = web::block(move || {
        let mut conn = pool.get()?;
        actions::find_all_downloads_by_name(&mut conn, &download_name_tmp)
    })
    .await?
    .map_err(actix_web::error::ErrorInternalServerError)?;

    if let Some(downloads) = downloads {
        Ok(HttpResponse::Ok().json(downloads))
    } else {
        let res =
            HttpResponse::NotFound().body(format!("No downloads found with name: {download_name}"));
        Ok(res)
    }
}

/// Populate all downloads.
#[get("/downloads")]
async fn get_downloads(pool: web::Data<DbPool>) -> Result<HttpResponse, Error> {
    // use web::block to offload blocking Diesel code without blocking server thread
    let downloads = web::block(move || {
        let mut conn = pool.get()?;
        actions::find_all_downloads(&mut conn)
    })
    .await?
    .map_err(actix_web::error::ErrorInternalServerError)?;

    if let Some(downloads) = downloads {
        Ok(HttpResponse::Ok().json(downloads))
    } else {
        let res = HttpResponse::NotFound().body("No downloads found".to_string());
        Ok(res)
    }
}

/// Inserts new download with name defined in input json.
#[post("/download")]
async fn add_download(
    pool: web::Data<DbPool>,
    form: web::Json<models::NewDownload>,
) -> Result<HttpResponse, Error> {
    // use web::block to offload blocking Diesel code without blocking server thread
    let user = web::block(move || {
        let mut conn = pool.get()?;
        actions::insert_new_download(&mut conn, &form.name)
    })
    .await?
    .map_err(actix_web::error::ErrorInternalServerError)?;

    Ok(HttpResponse::Ok().json(user))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // set up database connection pool
    let conn_spec = env::var("DATABASE_URL").expect("DATABASE_URL");
    let running_address = env::var("RUNNING_ADDRESS").unwrap_or("127.0.0.1".to_string());
    let running_port =
        env::var("RUNNING_PORT").unwrap_or(39764.to_string()).parse::<u16>().unwrap();
    let manager = ConnectionManager::<SqliteConnection>::new(conn_spec);
    let pool = r2d2::Pool::builder().build(manager).expect("Failed to create pool.");

    log::info!("Starting HTTP server at http://{running_address}:{running_port}");

    HttpServer::new(move || {
        App::new()
            // set up DB pool to be used with web::Data<Pool> extractor
            .app_data(web::Data::new(pool.clone()))
            .wrap(middleware::Logger::default())
            .service(
                web::scope("/api")
                .service(get_downloads)
                .service(add_download)
                .service(get_downloads_by_name),
            )
    })
    .bind((running_address, running_port))?
    .run()
    .await
}
