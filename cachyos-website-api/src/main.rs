use actix_cors::Cors;
use actix_web::{get, http, middleware, post, web, App, Error, HttpResponse, HttpServer, Result};
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};
use std::env;

use cachyos_website_api::*;

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

/// Populate last update notice.
#[get("/v2/last_update_notice")]
async fn get_last_update_msg(pool: web::Data<DbPool>) -> Result<HttpResponse, Error> {
    // use web::block to offload blocking Diesel code without blocking server thread
    let last_update_notice = web::block(move || {
        let mut conn = pool.get()?;
        actions::find_last_update_msg(&mut conn)
    })
    .await?
    .map_err(actix_web::error::ErrorInternalServerError)?;

    if let Some(last_update_notice) = last_update_notice {
        Ok(HttpResponse::Ok().json(last_update_notice))
    } else {
        let res = HttpResponse::NotFound().body("No notice found".to_string());
        Ok(res)
    }
}

/// Shows visualize representation of stats.
#[get("/")]
async fn get_index_page() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type(http::header::ContentType::html())
        .body(include_str!("../index.html")))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenvy::dotenv().ok();
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
        let cors = Cors::default()
            // Allow requests from the https://cachyos.org domain and from localhost
            .allowed_origin("https://cachyos.org")
            .allowed_origin("http://localhost:3000")
            .allowed_origin_fn(|origin, _req_head| origin.as_bytes().ends_with(b".cachyos.org"))
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http::header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            // set up DB pool to be used with web::Data<Pool> extractor
            .app_data(web::Data::new(pool.clone()))
            .wrap(cors)
            .wrap(middleware::Logger::default())
            .service(get_index_page)
            .service(
                web::scope("/api")
                .service(get_downloads)
                .service(add_download)
                .service(get_downloads_by_name)

                .service(get_last_update_msg),
            )
    })
    .bind((running_address, running_port))?
    .run()
    .await
}
