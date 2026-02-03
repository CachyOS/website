use crate::models;
use crate::models::{ChartData, Download};
use cached::proc_macro::once;
use diesel::prelude::*;
use itertools::Itertools;
use std::time::Duration;
use uuid::Uuid;

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

/// Run query using Diesel to get all download data for charting purposes.
#[once(time = 3600, sync_writes = true, result = true)]
pub fn get_chart_data(conn: &mut SqliteConnection) -> Result<Vec<models::ChartData>, DbError> {
    use crate::schema::downloads::dsl::*;

    let matches = downloads.load::<models::Download>(conn)?;
    let matches = aggregate_chart_data(matches);

    Ok(matches)
}

/// Aggregate download data for charting purposes.
fn aggregate_chart_data(downloads: Vec<Download>) -> Vec<ChartData> {
    let aggregated: Vec<ChartData> = downloads
        .iter()
        .map(|d| (d.name.clone(), d.timestamp.date()))
        .counts()
        .into_iter()
        .map(|((name, date), count)| ChartData { name, date, count })
        .sorted_by_key(|x| x.date)
        .collect();

    aggregated
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

pub fn insert_new_update_msg(
    conn: &mut SqliteConnection,
    message_body: &str,
) -> Result<models::UpdateMsg, DbError> {
    // It is common when using Diesel with Actix Web to import schema-related
    // modules inside a function's scope (rather than the normal module's scope)
    // to prevent import collisions and namespace pollution.
    use crate::schema::update_messages::dsl::*;

    let new_update_message =
        models::UpdateMsg { id: Uuid::new_v4().to_string(), body: message_body.to_owned() };

    diesel::insert_into(update_messages).values(&new_update_message).execute(conn)?;
    Ok(new_update_message)
}

pub fn find_last_update_msg(
    conn: &mut SqliteConnection,
) -> Result<Option<models::UpdateMsg>, DbError> {
    use crate::schema::update_messages::dsl::*;

    let matches = update_messages.load::<models::UpdateMsg>(conn).optional()?;

    if let Some(matches_opt) = matches.clone() {
        Ok(matches_opt.last().cloned())
    } else {
        Ok(None)
    }
}

pub fn remove_all_update_msgs(conn: &mut SqliteConnection) -> Result<usize, DbError> {
    // It is common when using Diesel with Actix Web to import schema-related
    // modules inside a function's scope (rather than the normal module's scope)
    // to prevent import collisions and namespace pollution.
    use crate::schema::update_messages::dsl::*;

    Ok(diesel::delete(update_messages).execute(conn)?)
}
