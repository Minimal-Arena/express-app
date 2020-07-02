const router = require("express").Router();

const Skills = require("../../models/skillModel");

router.get("/", (req, res) => {
  Skills.getSkills()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get skills: ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Skills.getSkillById(id)
    .then((skill) => {
      if (!skill) {
        res.status(400).json({ error: `No skill with that ID was found :(` });
      } else {
        res.status(200).json(skill);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get skill by ID: ${err.message}` });
    });
});

module.exports = router;
