exports.up = function (knex) {
  return (
    // CREATE TABLE Skills
    knex.schema.createTable("skills", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();      
      //     name string,
      tbl.string("name").notNullable().unique();
      //     type string,
      tbl.string("type").notNullable();
      //     description string,
      tbl.string("description").nullable();
      //     base_power integer,
      tbl.integer("base_power").notNullable();	
      //     cost integer
      tbl.integer("cost").notNullable();
    })
  );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("skills");
};
