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
        "name": "Archer",
        "skill_slot1": 1,
        "skill_slot2": 2,
        "skill_slot3": 3,
        "mana": 70,
        "health": 80,
        "power": 100
    },
    {
        "id": 2,
        "name": "Warewolf",
        "skill_slot1": 3,
        "skill_slot2": 1,
        "skill_slot3": 2,
        "mana": 40,
        "health": 130,
        "power": 180
    }
]
```
**GET** `/api/game/class/:id`
```
 {
    "id": 1,
    "name": "Archer",
    "skill_slot1": 1,
    "skill_slot2": 2,
    "skill_slot3": 3,
    "mana": 70,
    "health": 80,
    "power": 100
}
```

## Skills
**GET** `/api/game/skill`
```
[
    {
        "id": 1,
        "name": "Fireball",
        "base_power": 100,
        "type": "magic"
    },
    {
        "id": 2,
        "name": "Dagger Slash",
        "base_power": 70,
        "type": "physical"
    },
    {
        "id": 3,
        "name": "Spiritual Healing",
        "base_power": 100,
        "type": "magic"
    }
]
```

**GET** `/api/game/skill/:id`
```
{
    "id": 1,
    "name": "Fireball",
    "base_power": 100,
    "type": "magic"
}
```


### Database Schema

![logo](./ma-db-schema.png )