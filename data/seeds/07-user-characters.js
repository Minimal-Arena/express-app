exports.seed = function (knex) {
  return knex("user_characters").insert([
    {
      user_id: 1,
      character_id: 1,
    },
    {
      user_id: 1,
      character_id: 2,
    },
  ]);
};
