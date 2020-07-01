const router = require("express").Router();

const Skills = require("../../../models/skillModel");

router.get("/", (req, res) => {
  Skills.getSkills()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Skills.getSkillById(id)
    .then((skill) => {
      res.status(200).json(skill);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
