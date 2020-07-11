exports.up = function (knex) {
  return (
    // CREATE TABLE Classes
    knex.schema.createTable("classes", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();
      //     name string,
      tbl.string("name").notNullable().unique();
      //     skill_slot1 integer,
      tbl
        .integer("skill_slot1")
        .notNullable()
        .references("id")
        .inTable("skills")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     skill_slot2 integer,
      tbl
        .integer("skill_slot2")
        .notNullable()
        .references("id")
        .inTable("skills")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     skill_slot3 integer,
      tbl
        .integer("skill_slot3")
        .notNullable()
        .references("id")
        .inTable("skills")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     mana integer,
      tbl.integer("mana").notNullable();
      //     health integer,
      tbl.integer("health").notNullable();
      //     power integer
      tbl.integer("power").notNullable();
      //     asset_attack string,
      tbl.string("asset_attack");
      //     asset_damaged string,
      tbl.string("asset_damaged");
      //     asset_idle string
      tbl.string("asset_idle");
    })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes");
};
