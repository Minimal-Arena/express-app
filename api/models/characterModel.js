const db = require("../../data/dbConfig");

module.exports = {
  getCharacters,
  getCharactersByUserId,
  getCharacterById,
};

function getCharacters() {
  return db("characters");
}

function getCharacterById(id) {
  return db("characters").where({ id }).first();
}

function getCharactersByUserId(user_id) {
  const userChars = db("user_characters as uc")
    .where({ user_id })
    .join("characters as c", "uc.character_id", "c.id");
  return userChars;
}
