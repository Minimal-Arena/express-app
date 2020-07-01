exports.up = function (knex) {
  return (
    // CREATE TABLE Equipment
    knex.schema.createTable("equipment", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();
      //     name string,
      tbl.string("name").notNullable().unique();
      //     type string,
      tbl.string("type").notNullable();
      //     description string,
      tbl.string("description").nullable();
      //     level integer,
      tbl.integer("level").defaultTo(1);
      //     quality integer,
      tbl.integer("quality").defaultTo(1);
      //     base_stat integer
      tbl.integer("base_stat").defaultTo(1);
    })
  );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("equipment");
};
