exports.up = function (knex) {
  return (
    // CREATE TABLE Skills
    knex.schema.createTable("skills", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();
      //     name string,
      tbl.string("name").notNullable().unique();
      //     base_power int,
      tbl.integer("base_power").notNullable();
      //     type string
      tbl.string("type").notNullable();
    })
  );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("skills");
};
