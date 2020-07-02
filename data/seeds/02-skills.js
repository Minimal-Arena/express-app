exports.seed = function (knex) {
  return knex("skills").insert([
    {
      name: "Fireball",
      description: "A firey ball",
      base_power: 100,
      type: "magic",
      cost: 50
    },
    {
      name: "Dagger Slash",
      description: "A slashing attack with a pokey weapon",
      base_power: 70,
      type: "physical",
      cost: 40
    },
    {
      name: "Spiritual Healing",
      description: null,
      base_power: 100,
      type: "magic",
      cost: 50
    },
  ]);
};
