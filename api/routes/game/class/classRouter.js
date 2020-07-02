const router = require("express").Router();

const Classes = require("../../../models/classModel");
const details = require("../../../utils/characterDetails");

router.get("/", (req, res) => {
  Classes.getClasses()
    .then(async (list) => {
      // set array to hold all classes
      let array = [];

      // loop through classes
      for await (i of list) {
        const newObj = await details(i, "class");
        array.push(newObj);
      }
      res.status(200).json(array);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Classes.getClassById(id)
    .then(async (classObj) => {
      const newObj = await details(classObj, "class");

      res.status(200).json(newObj);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
