const router = require("express").Router();

const Classes = require("../../../models/classModel");
const Skills = require("../../../models/skillModel");

router.get('/', (req,res) => {

    Classes.getClasses()
        .then(async (list) => {
            // set array to hold all classes
            let array = []

            // loop through classes
            for await (i of list) {
                // set array to hold each skill on the class
                let skills = [];

                // find skill by its id and push to array
                await Skills.getSkillById(i.skill_slot1)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                await Skills.getSkillById(i.skill_slot2)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                await Skills.getSkillById(i.skill_slot3)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                // use skills array objects to replace the 'id' on the class object
                const newObj = {
                    ...i,
                    skill_slot1: skills[0],
                    skill_slot2: skills[1],
                    skill_slot3: skills[2]
                }
                array.push(newObj)
            }
            res.status(200).json(array)
        })
        .catch(err => {
            res.status(500).json({ error: `Error attempting to get classes: ${err.message}` })
        })

})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Classes.getClassById(id)
    .then(async (classObj) => {

        let skills = [];

                await Skills.getSkillById(classObj.skill_slot1)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                await Skills.getSkillById(classObj.skill_slot2)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                await Skills.getSkillById(classObj.skill_slot3)
                .then(skill => {
                    skills.push(skill)
                })
                .catch(err => {
                    res.status(500).json({ error: `Error attempting to get class skills: ${err.message}` })
                })

                const newObj = {
                    ...classObj,
                    skill_slot1: skills[0],
                    skill_slot2: skills[1],
                    skill_slot3: skills[2]
                }

      res.status(200).json(newObj);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: `Error attempting to get classes: ${err.message}` });
    });
});

module.exports = router;
