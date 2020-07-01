exports.up = function (knex) {
  return (
    // CREATE TABLE Users_Consumables
    knex.schema.createTable("user_consumables", (tbl) => {
      //     user_id integer,
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     consumable_id integer
      tbl
        .integer("consumable_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("consumables")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("quantity").unsigned().notNullable();
      tbl.primary(["user_id", "consumable_id"]);
    })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_consumables");
};
