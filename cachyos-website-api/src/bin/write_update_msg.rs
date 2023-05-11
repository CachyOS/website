use cachyos_website_api::*;

use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};

use std::env;
use std::io::{stdin, Read};

fn main() {
    dotenv::dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // set up database connection pool
    let conn_spec = env::var("DATABASE_URL").expect("DATABASE_URL");
    let manager = ConnectionManager::<SqliteConnection>::new(conn_spec);
    let pool = r2d2::Pool::builder().build(manager).expect("Failed to create pool.");

    let mut body = String::new();

    println!(
        "What would you like your body to be? (Press CTRL+D when finished)\n",
    );
    stdin().read_to_string(&mut body).unwrap();

    // trim end
    let body = body.trim_end();

    let mut conn = pool.get().unwrap();
    let update_msg = actions::insert_new_update_msg(&mut conn, &body).unwrap();

    println!("Saved with id {}", update_msg.id);
}
