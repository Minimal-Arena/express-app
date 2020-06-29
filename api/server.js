// Dependency Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Routes Imports
const authRouter = require('./auth/authRouter.js');

// Middleware Imports


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/auth', authRouter);

// Alive messages
server.get('/', (req, res) => {
    res.send(`<h2>MINIMAL ARENA server is alive</h2>`);
});
server.get('/api', (req, res) => {
    res.send(`<h2>Use an /api/endpoint...</h2>`);
});

module.exports = server;