// Dependency Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// Routes Imports
const authRouter = require("./routes/auth/authRouter");
const classRouter = require("./routes/game/classRouter");
const skillRouter = require("./routes/game/skillRouter");
const consumableRouter = require("./routes/game/consumableRouter");
const equipmentRouter = require("./routes/game/equipmentRouter");
const characterRouter = require("./routes/game/characterRouter");

// Middleware Imports
const authenticate = require("./middleware/auth-middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/game/class", classRouter);
server.use("/api/game/skill", skillRouter);
server.use("/api/game/consumable", consumableRouter);
server.use("/api/game/equipment", equipmentRouter);
server.use("/api/game/character", authenticate, characterRouter);

// Alive messages
server.get("/", (req, res) => {
  res.send(`<h2>MINIMAL ARENA server is alive</h2>`);
});
server.get("/api", (req, res) => {
  res.send(`<h2>Use an /api/endpoint...</h2>`);
});

module.exports = server;
