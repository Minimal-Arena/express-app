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

### Database Schema

![logo](./ma-db-schema.png )