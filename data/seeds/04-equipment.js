exports.seed = function (knex) {
  return knex("equipment").insert([
    {
      name: "Sword",
      type: "melee",
      description: "The standard starter weapon",
      level: 0,
      quality: 1,
      base_stat: 1,
    },
    {
      name: "Shield",
      type: "defense",
      description: "Ye ol' boring shield",
    },
  ]);
};
