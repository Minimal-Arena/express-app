exports.up = function (knex) {
    return (
      // CREATE TABLE Users_Equipment
      knex.schema.createTable("user_equipment", (tbl) => {
        //     user_id integer,
        tbl
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        //     equipment_id integer
        tbl
          .integer("equipment_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("consumables")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.integer("quantity").unsigned().notNullable();
        tbl.primary(["user_id", "equipment_id"]);
      })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user_equipment");
  };
  