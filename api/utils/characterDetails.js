const Skills = require("../models/skillModel");
const Consumables = require("../models/consumableModel");
const Equipment = require("../models/equipmentModel");
const Classes = require("../models/classModel");

module.exports = characterWithDetails;

async function characterWithDetails(object, type) {
  // find skill by its id and push to array
  const skill1 = await Skills.getSkillById(object.skill_slot1)
  const skill2 = await Skills.getSkillById(object.skill_slot2)
  const skill3 = await Skills.getSkillById(object.skill_slot3)

  const detailedObj = {
    ...object,
    skill_slot1: skill1,
    skill_slot2: skill2,
    skill_slot3: skill3,
  };

  if (type === "class") {
    return detailedObj;
  } else if (type === "character") {
    const classObj = await Classes.getClassById(object.class)

    const equipment1 = await Equipment.getEquipmentById(object.equipment_slot1)
    const equipment2 = await Equipment.getEquipmentById(object.equipment_slot2)
    const equipment3 = await Equipment.getEquipmentById(object.equipment_slot3)

    const consumable1 = await Consumables.getConsumableById(object.consumable_slot1)
    const consumable2 = await Consumables.getConsumableById(object.consumable_slot2)
    const consumable3 = await Consumables.getConsumableById(object.consumable_slot3)

    // use skills, equpiment, and consumables array objects to replace
    // 'id' on character objects. Add base class stats with stored character stats
    const characterObj = await {
      ...detailedObj,
      class: {
          id: classObj.id,
          name: classObj.name,
          base_health: classObj.health,
          base_mana: classObj.mana,
          base_power: classObj.power
      },
      health: classObj.health + object.health,
      mana: classObj.mana + object.mana,
      power: classObj.power + object.power,
      consumable_slot1: consumable1 ? consumable1 :null,
      consumable_slot2: consumable2 ? consumable2 :null,
      consumable_slot3: consumable3 ? consumable3 :null,
      equipment_slot1: equipment1 ? equipment1 :null,
      equipment_slot2: equipment2 ? equipment2 :null,
      equipment_slot3: equipment3 ? equipment3 :null
    };

    return characterObj;
  }
}
