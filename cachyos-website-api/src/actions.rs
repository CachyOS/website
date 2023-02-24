use diesel::prelude::*;
use uuid::Uuid;

use crate::models;

type DbError = Box<dyn std::error::Error + Send + Sync>;

/// Run query using Diesel to find downloads by name and return them.
pub fn find_all_downloads_by_name(
    conn: &mut SqliteConnection,
    download_name: &str,
) -> Result<Option<Vec<models::Download>>, DbError> {
    use crate::schema::downloads::dsl::*;

    let matches =
        downloads.filter(name.eq(download_name)).load::<models::Download>(conn).optional()?;

    Ok(matches)
}

/// Run query using Diesel to find all available downloads in the DB and return them.
pub fn find_all_downloads(
    conn: &mut SqliteConnection,
) -> Result<Option<Vec<models::Download>>, DbError> {
    use crate::schema::downloads::dsl::*;

    let matches = downloads.load::<models::Download>(conn).optional()?;

    Ok(matches)
}

/// Run query using Diesel to insert a new database row and return the result.
pub fn insert_new_download(
    conn: &mut SqliteConnection,
    nm: &str, // prevent collision with `name` column imported inside the function
) -> Result<models::Download, DbError> {
    // It is common when using Diesel with Actix Web to import schema-related
    // modules inside a function's scope (rather than the normal module's scope)
    // to prevent import collisions and namespace pollution.
    use crate::schema::downloads::dsl::*;

    let new_download = models::Download {
        id: Uuid::new_v4().to_string(),
        name: nm.to_owned(),
        timestamp: chrono::Utc::now().naive_utc(),
    };

    diesel::insert_into(downloads).values(&new_download).execute(conn)?;
    Ok(new_download)
}
