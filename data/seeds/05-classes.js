exports.seed = function (knex) {
  return knex("classes").insert([
    {
      name: "Wizard",
      skill_slot1: 1,
      skill_slot2: 2,
      skill_slot3: 3,
      mana: 250,
      health: 150,
      power: 50,
      asset_attack: "https://res.cloudinary.com/minimalarena/image/upload/v1594503558/minimal_assets/classes/wizard/attack_wyhosn.gif",
      asset_damaged: "https://res.cloudinary.com/minimalarena/image/upload/v1594503558/minimal_assets/classes/wizard/damaged_nh0sqr.gif",
      asset_idle: "https://res.cloudinary.com/minimalarena/image/upload/v1594503558/minimal_assets/classes/wizard/idle_n54c2q.gif"
    },
    {
      name: "Brute",
      skill_slot1: 4,
      skill_slot2: 5,
      skill_slot3: 6,
      mana: 50,
      health: 250,
      power: 250,
      asset_attack: null,
      asset_damaged: null,
      asset_idle: "https://res.cloudinary.com/minimalarena/image/upload/v1594503569/minimal_assets/classes/brute/idle_acivzz.gif"
    },
    {
      name: "Rogue",
      skill_slot1: 7,
      skill_slot2: 8,
      skill_slot3: 9,
      mana: 100,
      health: 150,
      power: 150,
      asset_attack: "https://res.cloudinary.com/minimalarena/image/upload/v1594503545/minimal_assets/classes/rogue/attack_tja60w.gif",
      asset_damaged: null,
      asset_idle: "https://res.cloudinary.com/minimalarena/image/upload/v1594503545/minimal_assets/classes/rogue/idle_nk9cde.gif"
    },
  ]);
};
