exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "Test User",
      email: "test@test.com",
      password: "$2b$11$AdsDMOOnNWJH/GV0I6EVk.KROYPClTOgTMHjR31oXUblUS1UxiUDm",
    },
    {
      username: "Some User",
      email: "user@user.com",
      password: "$2b$11$ccVujqV0PC74/Vs5ch78XumD6l3LFnHzhIFXuvo6Dk5umnw0BuScW",
    },
  ]);
};
