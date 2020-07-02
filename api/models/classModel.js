const db = require("../../data/dbConfig");

module.exports = {
    getClasses,
    getClassById
};

function getClasses() {
  return db("classes")
}

function getClassById(id) {
    return db("classes").where({ id }).first();
}
  