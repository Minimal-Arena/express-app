// Dependency Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Routes Imports
const authRouter = require('./routes/auth/authRouter');
const classRouter = require('./routes/game/class/classRouter');
const skillRouter = require('./routes/game/skill/skillRouter');

// Middleware Imports


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/game/class', classRouter);
server.use('/api/game/skill', skillRouter);

// Alive messages
server.get('/', (req, res) => {
    res.send(`<h2>MINIMAL ARENA server is alive</h2>`);
});
server.get('/api', (req, res) => {
    res.send(`<h2>Use an /api/endpoint...</h2>`);
});

module.exports = server;