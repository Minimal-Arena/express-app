exports.seed = function (knex) {
  return knex("characters").insert([
    {
      class_id: 1,
      nickname: "Jeff's Archer",
      exp: 1000,
      mana: 70,
      health: 80,
      power: 100,
      skill_slot1: 1,
      skill_slot2: 2,
      skill_slot3: 3,
      consumable_slot1: 1,
      consumable_slot2: 2,
      consumable_slot3: 1,
      equipment_slot1: 1,
      equipment_slot2: 2
    },
    {
      class_id: 2,
      skill_slot1: 3,
      skill_slot2: 1,
      skill_slot3: 2,
    },
  ]);
};
