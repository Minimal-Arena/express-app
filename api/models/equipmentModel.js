const db = require("../../data/dbConfig");

module.exports = {
  getEquipment,
  getEquipmentById,
};

function getEquipment() {
  return db("equipment").orderBy("id", "asc");
}

function getEquipmentById(id) {
  return db("equipment").where({ id }).first();
}
