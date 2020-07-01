exports.seed = function (knex) {
  return knex("skills").insert([
    {
      name: "Fireball",
      base_power: 100,
      type: "magic"
    },
    {
        name: "Dagger Slash",
        base_power: 70,
        type: "physical"
    },
    {
        name: "Spiritual Healing",
        base_power: 100,
        type: "magic"
    }
  ]);
};
