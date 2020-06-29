// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: { directory: "./database/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foregin_keys = ON", done);
      },
    },
  },

  test: {
    client: "sqlite3",
    connection: { filename: "./database/test.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: { directory: "./database/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foregin_keys = ON", done);
      },
    },
  },
};
