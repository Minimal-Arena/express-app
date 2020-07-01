const db = require("../../data/dbConfig");

module.exports = {
    getSkills,
  getSkillById,
};

function getSkills() {
    return db("skills")
}

function getSkillById(id) {
  return db("skills").where({ id }).first();
}
