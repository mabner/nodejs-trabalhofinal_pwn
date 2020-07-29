exports.up = function (knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id_usr').primary()
        table.timestamps('dt_usr')
        table.string('e_mail')
        table.string('nm_usr')
        table.string('senha')
        table.string('st_inativo')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('usuarios')
};
