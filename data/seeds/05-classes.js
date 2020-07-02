exports.seed = function (knex) {
  return knex("classes").insert([
    {
      name: "Wizard",
      skill_slot1: 1,
      skill_slot2: 2,
      skill_slot3: 3,
      mana: 250,
      health: 150,
      power: 50,
    },
    {
      name: "Brute",
      skill_slot1: 4,
      skill_slot2: 5,
      skill_slot3: 6,
      mana: 50,
      health: 250,
      power: 250,
    },
    {
      name: "Rogue",
      skill_slot1: 7,
      skill_slot2: 8,
      skill_slot3: 9,
      mana: 100,
      health: 150,
      power: 150,
    },
  ]);
};
