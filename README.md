# MINIMAL ARENA API

## API Base URL
LIVE URL: `https://minimal-arena.herokuapp.com/` </br>
STAGING URL: `https://minimal-staging.herokuapp.com/`

#### Server Status
**GET**: `/` </br>
When active, will respond with: 
```
MINIMAL ARENA server is alive
```

## Table of Contents

- [Install](#install)
- [Authentication](#authentication)
    - [Register](#register-a-user) (POST)
    - [Login](#login-with-a-registered-user) (POST)
- [Game](#game)
    - [Classes](#classes) (GET)
    - [Skills](#skills) (GET)
    - [Characters](#characters) (GET)
- [DB Schema](#database-schema)

## Install

```
npm install
```

# Authentication
Authentication expires in: `3 hours`

---
Test Account Seeds:
```
username: Test User
email: test@test.com
password: 1234
```
```
username: Some User
email: user@user.com
password: 1234
```
---

### Register a user

Usernames *MUST* be unique. </br>
Registering an existing user will give a response:
`{ error: "Username already registered" }`</br></br>
**POST**: `/api/auth/register`
```
{
    "username": "myuser",
    "email": "myemail@myemail.com"
    "password": "verysecretpass"
}
```

Will return:
```
{
    "user": {
        "id": int,
        "username": string
    },
    "token": string
}
```

### Login with a registered user
**POST**: `/api/auth/login`
```
{
    "username": "myuser",
    "password": "verysecretpass"
}
```

Will return:
```
{
    "user": {
        "id": int,
        "username": string
    },
    "token": string
}
```

# Game

## Classes
**GET** `/api/game/class`
```
[
    {
        "id": 1,
        "name": "Wizard",
        "skill_slot1": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot2": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "skill_slot3": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "mana": 250,
        "health": 150,
        "power": 50
    },
]
```
**GET** `/api/game/class/:id`
```
{
    "id": 1,
    "name": "Wizard",
    "skill_slot1": {
        "id": 1,
        "name": "Fireball",
        "type": "magic",
        "description": "A firey ball",
        "base_power": 100,
        "cost": 50
    },
    "skill_slot2": {
        "id": 2,
        "name": "Lightning",
        "type": "magic",
        "description": "A bolty bolt",
        "base_power": 150,
        "cost": 100
    },
    "skill_slot3": {
        "id": 3,
        "name": "Healing",
        "type": "magic",
        "description": null,
        "base_power": 20,
        "cost": 100
    },
    "mana": 250,
    "health": 150,
    "power": 50
}
```

## Skills
**GET** `/api/game/skill`
```
[
    {
        "id": 1,
        "name": "Fireball",
        "type": "magic",
        "description": "A firey ball",
        "base_power": 100,
        "cost": 50
    },
    {
        "id": 2,
        "name": "Lightning",
        "type": "magic",
        "description": "A bolty bolt",
        "base_power": 150,
        "cost": 100
    },
    {
        "id": 3,
        "name": "Healing",
        "type": "magic",
        "description": null,
        "base_power": 20,
        "cost": 100
    },
]
```

**GET** `/api/game/skill/:id`
```
{
    "id": 8,
    "name": "Poison Strike",
    "type": "magic",
    "description": null,
    "base_power": 100,
    "cost": 100
}
```
## Characters
Authorization Required: **GET** `/api/game/character`
```
[
    {
        "id": 1,
        "class": {
            "id": 1,
            "name": "Wizard",
            "base_health": 150,
            "base_mana": 250,
            "base_power": 50
        },
        "nickname": "Jeff's Archer",
        "exp": "1000",
        "health": 230,
        "mana": 320,
        "power": 150,
        "skill_slot1": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot2": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "skill_slot3": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "consumable_slot1": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "consumable_slot2": {
            "id": 2,
            "name": "Rotten Fish",
            "description": "Makes the user sick.",
            "effect": "-20"
        },
        "consumable_slot3": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "equipment_slot1": {
            "id": 1,
            "name": "Sword",
            "type": "melee",
            "description": "The standard starter weapon",
            "level": 0,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot2": {
            "id": 2,
            "name": "Shield",
            "type": "defense",
            "description": "Ye ol' boring shield",
            "level": 1,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot3": null
    },
    {
        "id": 2,
        "class": {
            "id": 2,
            "name": "Brute",
            "base_health": 250,
            "base_mana": 50,
            "base_power": 250
        },
        "nickname": null,
        "exp": "0",
        "health": 250,
        "mana": 50,
        "power": 250,
        "skill_slot1": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "skill_slot2": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot3": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "consumable_slot1": null,
        "consumable_slot2": null,
        "consumable_slot3": null,
        "equipment_slot1": null,
        "equipment_slot2": null,
        "equipment_slot3": null
]
```

Authorization Required: **GET** `/api/game/character/:id`
```
{
    "id": 1,
    "class": {
        "id": 1,
        "name": "Wizard",
        "base_health": 150,
        "base_mana": 250,
        "base_power": 50
    },
    "nickname": "Jeff's Archer",
    "exp": "1000",
    "health": 230,
    "mana": 320,
    "power": 150,
    "skill_slot1": {
        "id": 1,
        "name": "Fireball",
        "type": "magic",
        "description": "A firey ball",
        "base_power": 100,
        "cost": 50
    },
    "skill_slot2": {
        "id": 2,
        "name": "Lightning",
        "type": "magic",
        "description": "A bolty bolt",
        "base_power": 150,
        "cost": 100
    },
    "skill_slot3": {
        "id": 3,
        "name": "Healing",
        "type": "magic",
        "description": null,
        "base_power": 20,
        "cost": 100
    },
    "consumable_slot1": {
        "id": 1,
        "name": "Bread",
        "description": "Recovers 50 health",
        "effect": "+50"
    },
    "consumable_slot2": {
        "id": 2,
        "name": "Rotten Fish",
        "description": "Makes the user sick.",
        "effect": "-20"
    },
    "consumable_slot3": {
        "id": 1,
        "name": "Bread",
        "description": "Recovers 50 health",
        "effect": "+50"
    },
    "equipment_slot1": {
        "id": 1,
        "name": "Sword",
        "type": "melee",
        "description": "The standard starter weapon",
        "level": 0,
        "quality": 1,
        "base_stat": 1
    },
    "equipment_slot2": {
        "id": 2,
        "name": "Shield",
        "type": "defense",
        "description": "Ye ol' boring shield",
        "level": 1,
        "quality": 1,
        "base_stat": 1
    },
    "equipment_slot3": null
}
```

Authorization Required: **GET** `/api/game/character/user/:id`
```
[
    {
        "user_id": 1,
        "character_id": 1,
        "id": 1,
        "class": {
            "id": 1,
            "name": "Wizard",
            "base_health": 150,
            "base_mana": 250,
            "base_power": 50
        },
        "nickname": "Jeff's Archer",
        "exp": "1000",
        "health": 230,
        "mana": 320,
        "power": 150,
        "skill_slot1": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot2": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "skill_slot3": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "consumable_slot1": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "consumable_slot2": {
            "id": 2,
            "name": "Rotten Fish",
            "description": "Makes the user sick.",
            "effect": "-20"
        },
        "consumable_slot3": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "equipment_slot1": {
            "id": 1,
            "name": "Sword",
            "type": "melee",
            "description": "The standard starter weapon",
            "level": 0,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot2": {
            "id": 2,
            "name": "Shield",
            "type": "defense",
            "description": "Ye ol' boring shield",
            "level": 1,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot3": null
    },
]
```


### Database Schema

![logo](./ma-db-schema.png )