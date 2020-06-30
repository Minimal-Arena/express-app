exports.up = function (knex) {
    return (

        // Tbl of users
        knex.schema.createTable('users', tbl => {
            tbl.increments();
            tbl.string('username')
                .notNullable()
                .unique();
            tbl.string('email')
                .notNullable();
            tbl.string('password')
                .notNullable();
        })

    );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
