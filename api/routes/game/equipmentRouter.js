const router = require("express").Router();

const Equipment = require("../../models/equipmentModel");

router.get("/", (req, res) => {
  Equipment.getEquipment()
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
  Equipment.getEquipmentById(id)
    .then((equipment) => {
      res.status(200).json(equipment);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
