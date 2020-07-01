const db = require('../../data/dbConfig');

module.exports = {
    addUser,
    findUserById,
    findUser,
    getUsers
}
// for User register
function addUser(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            const [id] = ids;
            return findUserById(id);
        });
}
// for User register
function findUserById(id) {
    return db('users')
        .where({ id })
        .first();
}
// for User login
function findUser(filter) {
    return db('users')
        .select('id', 'username', 'email', 'password')
        .where(filter)
}

// for listing users for dev testing (excluding passwords)
function getUsers() {
    return db('users')
        .select('id', 'username', 'email')
}

