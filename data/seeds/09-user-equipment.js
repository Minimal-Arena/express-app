exports.seed = function (knex) {
    return knex("user_equipment").insert([
      {
        user_id: 1,
        equipment_id: 1,
        quantity: 7
      },
      {
        user_id: 1,
        equipment_id: 2,
        quantity: 9
      },
    ]);
  };
  