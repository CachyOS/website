use cachyos_website_api::*;

use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};

use std::env;

fn main() {
    dotenv::dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // set up database connection pool
    let conn_spec = env::var("DATABASE_URL").expect("DATABASE_URL");
    let manager = ConnectionManager::<SqliteConnection>::new(conn_spec);
    let pool = r2d2::Pool::builder().build(manager).expect("Failed to create pool.");

    let mut conn = pool.get().unwrap();
    let num_deleted = actions::remove_all_update_msgs(&mut conn).unwrap();

    println!("Deleted {} posts", num_deleted);
}
