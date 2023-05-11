diesel::table! {
    downloads (id) {
        id -> Text,
        name -> Text,
        timestamp -> Timestamp,
    }
}

diesel::table! {
    update_messages (id) {
        id -> Text,
        body -> Text,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    downloads,
    update_messages,
);
