const Skills = require("../models/skillModel");

module.exports = characterWithDetails;

async function characterWithDetails(object, type) {
  const skills = [];
  const consumables = [];
  const equipment = [];

  // find skill by its id and push to array
  await Skills.getSkillById(object.skill_slot1)
    .then((skill) => {
      skills.push(skill);
    })
    .catch((err) => {
      res.status(500).json({
        error: `Error attempting to get class skills: ${err.message}`,
      });
    });

  await Skills.getSkillById(object.skill_slot2)
    .then((skill) => {
      skills.push(skill);
    })
    .catch((err) => {
      res.status(500).json({
        error: `Error attempting to get class skills: ${err.message}`,
      });
    });

  await Skills.getSkillById(object.skill_slot3)
    .then((skill) => {
      skills.push(skill);
    })
    .catch((err) => {
      res.status(500).json({
        error: `Error attempting to get class skills: ${err.message}`,
      });
    });

  // use skills array objects to replace the 'id' on the class object
  const classObj = {
    ...object,
    skill_slot1: skills[0],
    skill_slot2: skills[1],
    skill_slot3: skills[2],
  };

  // use skills, equpiment, and consumables array objects to replace
  // 'id' on character objects
  const characterObj = {
    ...object,
    skill_slot1: skills[0],
    skill_slot2: skills[1],
    skill_slot3: skills[2],
  };

  if (type === "class") {
    return classObj;
  } else if (type === "character") {
    return characterObj;
  }
}
