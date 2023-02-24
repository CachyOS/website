diesel::table! {
    downloads (id) {
        id -> Text,
        name -> Text,
        timestamp -> Timestamp,
    }
}
