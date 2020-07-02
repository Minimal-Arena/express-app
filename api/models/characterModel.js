const db = require("../../data/dbConfig");

module.exports = {
  getCharacters,
  getCharactersByUser,
  getCharacterById,
};

function getCharacters() {
  return db("characters");
}

function getCharacterById(id) {
  return db("characters").where({ id }).first();
}

function getCharactersByUser(userId) {
    return "hi"
}
