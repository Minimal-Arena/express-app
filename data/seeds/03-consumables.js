exports.seed = function (knex) {
    return knex("consumables").insert([
      {
        name: "Bread",
        description: "Recovers 50 health",
        effect: "+50"
      },
      {
        name: "Rotten Fish",
        description: "Makes the user sick.",
        effect: "-20"
      },
    ]);
  };
  