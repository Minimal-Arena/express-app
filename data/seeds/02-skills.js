exports.seed = function (knex) {
  const physical = "physical"
  const magic = "magic"
  const status = "status"
  return knex("skills").insert([ 
    {
      name: "Fireball",
      description: "A firey ball",
      base_power: 100,
      type: magic,
      cost: 50
    },
    {
      name: "Lightning",
      description: "A bolty bolt",
      base_power: 150,
      type: magic,
      cost: 100
    },
    {
      name: "Healing",
      description: null,
      base_power: 20,
      type: magic,
      cost: 100
    },
    {
      name: "Club Strike",
      description: null,
      base_power: 100,
      type: physical,
      cost: 50
    },
    {
      name: "Curb Stomp",
      description: null,
      base_power: 200,
      type: physical,
      cost: 100
    },
    {
      name: "Rally",
      description: "Powerup physical strength",
      base_power: 100,
      type: status,
      cost: 50
    },
    {
      name: "Dagger Slash",
      description: "A slashing attack with a pokey weapon",
      base_power: 50,
      type: physical,
      cost: 50
    },
    {
      name: "Poison Strike",
      description: null,
      base_power: 100,
      type: magic,
      cost: 100
    },
    {
      name: "Invisibility",
      description: "─=Σ( ◣_◢)",
      base_power: 50,
      type: magic,
      cost: 100
    },
    
  ]);
};
