const router = require("express").Router();

const Classes = require("../../models/classModel");
const Characters = require("../../models/characterModel");
const details = require("../../utils/characterDetails");
const { json } = require("express");

router.get("/", (req, res) => {
  Characters.getCharacters()
    .then(async (list) => {
      let array = [];
      for await (i of list) {
        const newObj = await details(i, "character");
        array.push(newObj);
      }
      res.status(200).json(array);
    })
    .catch((err) => {
      res.status(500).json({
        error: `There was an error getting all characters: ${err.message}`,
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Characters.getCharacterById(id)
    .then(async (char) => {
      const newObj = await details(char, "character");
      res.status(200).json(newObj);
    })
    .catch((err) => {
      res.status(500).json({
        error: `There was an error getting character by ID: ${err.message}`,
      });
    });
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  Characters.getCharactersByUserId(id)
    .then(async (list) => {
      let array = [];
      for await (i of list) {
        const newObj = await details(i, "character");
        array.push(newObj);
      }
      res.status(200).json(array);
    })
    .catch((err) => {
      res.status(500).json({
        error: `There was an error getting characters by user's ID: ${err.message}`,
      });
    });
});

router.post("/", async (req, res) => {
  const { user_id, class_id } = req.body;
  // validate that needed info are included
  if (!user_id || !class_id) {
    res.status(400).json({
      error: "Must include user_id and class_id to create a character",
    });
  } else {
    // get class info to post onto new character
    const getClassObj = await Classes.getClassById(class_id);
    // format object needed by insert function
    const classObj = {
      class: class_id,
      nickname: req.body.nickname ? req.body.nickname : getClassObj.name,
      // health: req.body.health? req.body.health : null,
      // mana: req.body.mana? req.body.mana : null,
      // power: req.body.power? req.body.power : null,
      skill_slot1: getClassObj.skill_slot1,
      skill_slot2: getClassObj.skill_slot2,
      skill_slot3: getClassObj.skill_slot3,
    };

    Characters.createCharacter(classObj, user_id)
      .then(async (item) => {
        const newChar = await details(item, "character");
        res.status(201).json(newChar);
      })
      .catch((err) => {
        res.status(500).json({
          error: `There was an error creating the character: ${err.message}`,
        });
      });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const values = req.body;
  if (!values) {
    res.status(400).json({ error: "Must include values to be updated" });
  }

  Characters.updateCharacter(values, id)
    .then((i) => {
      res.status(204).json(i);
    })
    .catch((err) => {
      res.status(500).json({
        error: `There was an error updating the character: ${err.message}`,
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Characters.deleteCharacter(id)
    .then((i) => {
      if (i === 0) {
        res.status(400).json({
          error: `Could not find character with ID ${id}. Delete failed.`,
        });
      } else {
        res.status(202).json(i);
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: `There was an error deleting the character: ${err.message}`,
      });
    });
});

module.exports = router;
