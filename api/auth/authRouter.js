const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// root directory needs a .env file with a key of SECRET for this function to work.
const secret = process.env.SECRET;


router.get('/', (req, res) => {
    res.send(`<h2>Auth Route is alive.</h2>`)
})

module.exports = router;