const router = require("express").Router();

const Consumables = require("../../models/consumableModel");

router.get("/", (req, res) => {
  Consumables.getConsumables()
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
  Consumables.getConsumableById(id)
    .then((consumable) => {
      res.status(200).json(consumable);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
