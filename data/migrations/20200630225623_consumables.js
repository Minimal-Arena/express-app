exports.up = function (knex) {
  return (
    // CREATE TABLE Consumables
    knex.schema.createTable("consumables", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();
      //     name string,
      tbl.string("name").notNullable().unique();
      //     description string,
      tbl.string("description").nullable();
      //     effect string
      tbl.string("effect").notNullable();
    })
  );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("consumables");
};
