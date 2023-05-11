use serde::{Deserialize, Serialize};

use crate::schema::{downloads, update_messages};
use diesel::{Insertable, Queryable};

#[derive(Debug, Clone, Serialize, Deserialize, Queryable, Insertable)]
#[diesel(table_name = downloads)]
pub struct Download {
    pub id: String,
    pub name: String,
    pub timestamp: chrono::NaiveDateTime,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewDownload {
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, Queryable, Insertable)]
#[diesel(table_name = update_messages)]
pub struct UpdateMsg {
    pub id: String,
    pub body: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewUpdateMsg {
    pub body: String,
}
