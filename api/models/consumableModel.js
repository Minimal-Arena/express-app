const db = require("../../data/dbConfig");

module.exports = {
  getConsumables,
  getConsumableById,
};

function getConsumables() {
  return db("consumables").orderBy("id", "asc");
}

function getConsumableById(id) {
  return db("consumables").where({ id }).first();
}