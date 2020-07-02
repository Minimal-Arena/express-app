const router = require("express").Router();

const Characters = require("../../models/characterModel");
const details = require("../../utils/characterDetails");

router.get("/", (req, res) => {
  Characters.getCharacters()
    .then(async (list) => {
      let array = [];
      for await (i of list) {
        const newObj = await details(i, "class");
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
        const newObj = await details(i, "class");
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

module.exports = router;
