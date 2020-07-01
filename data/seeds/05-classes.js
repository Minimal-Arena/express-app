exports.seed = function (knex) {
  return knex("classes").insert([
    {
      name: "Archer",
      skill_slot1: 1,
      skill_slot2: 2,
      skill_slot3: 3,
      mana: 70,
      health: 80,
      power: 100,
    },
    {
      name: "Warewolf",
      skill_slot1: 3,
      skill_slot2: 1,
      skill_slot3: 2,
      mana: 40,
      health: 130,
      power: 180,
    },
  ]);
};
