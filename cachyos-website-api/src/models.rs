use serde::{Deserialize, Serialize};

use crate::schema::downloads;
use diesel::{Insertable, Queryable};

#[derive(Debug, Clone, Serialize, Deserialize, Queryable, Insertable)]
pub struct Download {
    pub id: String,
    pub name: String,
    pub timestamp: chrono::NaiveDateTime,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewDownload {
    pub name: String,
}
