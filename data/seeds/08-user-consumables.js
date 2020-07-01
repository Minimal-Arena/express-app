exports.seed = function (knex) {
    return knex("user_consumables").insert([
      {
        user_id: 1,
        consumable_id: 1,
        quantity: 5
      },
      {
        user_id: 1,
        consumable_id: 2,
        quantity: 1
      },
    ]);
  };
  