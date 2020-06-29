const server = require('./api/server.js');

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`);
});