exports.up = function (knex) {
  return (
    // CREATE TABLE Characters
    knex.schema.createTable("characters", (tbl) => {
      //     id integer PRIMARY KEY AUTOINCREMENT,
      tbl.increments();
      //     class_id integer,
      tbl
        .integer("class")
        .notNullable()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     nickname string,
      tbl.string("nickname").nullable();
      //     exp bigint,
      tbl.bigint("exp").default(0);
      //     health integer,
      tbl.integer("health").default(0);
      //     mana integer,
      tbl.integer("mana").default(0);
      //     power integer,
      tbl.integer("power").default(0);
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
      //     consumable_slot1 integer,
      tbl
        .integer("consumable_slot1")
        .nullable()
        .references("id")
        .inTable("consumables")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     consumable_slot2 integer,
      tbl
        .integer("consumable_slot2")
        .nullable()
        .references("id")
        .inTable("consumables")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     consumable_slot3 integer,
      tbl
        .integer("consumable_slot3")
        .nullable()
        .references("id")
        .inTable("consumables")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     equipment_slot1 integer,
      tbl
        .integer("equipment_slot1")
        .nullable()
        .references("id")
        .inTable("equipment")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     equipment_slot2 integer,
      tbl
        .integer("equipment_slot2")
        .nullable()
        .references("id")
        .inTable("equipment")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //     equipment_slot3 integer
      tbl
        .integer("equipment_slot3")
        .nullable()
        .references("id")
        .inTable("equipment")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
  );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("characters");
};
