const router = require("express").Router();

const Classes = require("../../../models/classModel");

// router.get('/', (req,res) => {

//     Classes.getClasses()
//         .then(list => {
//             let array = []
//             for (i of list) {
//                 console.log(i)
//                 const newObj = {
//                     ...i,
//                     skill_slot1: Classes.getSkillById(i.skill_slot1)
//                 }
//                 array.push(newObj)
//             }
//             console.log(array)
//         })
//         .catch(err => {
//             res.status(500).json({ error: `Error attempting to get classes: ${err.message}` })
//         })

// })

router.get("/", (req, res) => {
  Classes.getClasses()
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
  Classes.getClassById(id)
    .then((classObj) => {
      res.status(200).json(classObj);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
