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
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    useNullAsDefault: false,
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
