const dotenv = require("dotenv").config();

// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "arena",
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    useNullAsDefault: false,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_URL,
    },
    useNullAsDefault: false,
    ssl: false,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  test: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "arena",
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    useNullAsDefault: false,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
