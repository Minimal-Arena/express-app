const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// root directory needs a .env file with a key of SECRET for this function to work.
const secret = process.env.SECRET;

const User = require("../../models/authModel.js");

router.get("/", (req, res) => {
  res.send(`<h2>Auth Route is alive.</h2>`);
});

router.get("/dev", (req, res) => {
  User.getUsers()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: `Error attempting login: ${err.message}` });
    });
});

router.post("/register", (req, res) => {
  if (!req.body || !req.body.password || !req.body.username || !req.body.email) {
    res.status(400).json({ message: "Username, email, and password are required." });
  } else {
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 11);
    newUser.password = hash;

    User.addUser(newUser)
      .then((saved) => {
        const token = getToken(saved);
        res.status(201).json({
          user: {
            id: saved.id,
            username: saved.username,
          },
          token: token,
        });
      })
      .catch((err) => {
        if (err.message.includes("UNIQUE constraint failed")) {
          res.status(500).json({ error: `Username already registered` });
        } else {
          res
            .status(500)
            .json({ error: `Error adding new User: ${err.message}` });
        }
      });
  }
});

router.post("/login", (req, res) => {
  if (!req.body || !req.body.password || !req.body.username) {
    res.status(400).json({ message: "Username and password are required." });
  } else {
    let { username, password } = req.body;

    User.findUser({ username })
      .first()
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getToken(user);
          res.status(200).json({
            user: {
              id: user.id,
              username: user.username,
            },
            token: token,
          });
        } else {
          res.status(401).json({ message: "Invalid login credentials" });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: `Error attempting login: ${err.message}` });
      });
  }
});

// function to create token with a secret
function getToken(user) {
  const tokenPayload = {
    userid: user.id,
    username: user.name,
    role: ["User"],
    author: "Created by Jeffrey Orndorff",
  };
  const options = { expiresIn: "3h" };

  const token = jwt.sign(tokenPayload, secret, options);

  return token;
}

module.exports = router;
