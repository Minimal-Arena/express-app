const db = require("../../data/dbConfig");

module.exports = {
  getCharacters,
  getCharactersByUserId,
  getCharacterById,
  createCharacter,
  updateCharacter,
  addCharacter,
  deleteCharacter,
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

function createCharacter(character, user_id) {
  // create new character on characters table
  return db("characters")
    .insert(character)
    .returning("id")
    .then(async(ids) => {
      const [id] = ids;
      await db("user_characters").insert({ user_id, character_id: id });
      return getCharacterById(id)
    });
}

function updateCharacter(character) {
  // update changes to a character
}

function addCharacter(id) {
  // add created character to user_characters table
}

function deleteCharacter(id) {
  // delete a character from characters & user_characters table
}
