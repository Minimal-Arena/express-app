exports.up = function (knex) {
  return (
    // CREATE TABLE Users_Characters
    knex.schema.createTable("user_characters", (tbl) => {
      //     user_id integer,
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     character_id integer
      tbl
        .integer("character_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("characters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["user_id", "character_id"]);
    })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_characters");
};
