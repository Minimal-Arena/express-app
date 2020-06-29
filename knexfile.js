// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: './data/arena.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foregin_keys = ON", done);
      },
    },
  },

  test: {
    client: "sqlite3",
    connection: { filename: "./data/test.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foregin_keys = ON", done);
      },
    },
  },
};