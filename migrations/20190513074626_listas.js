exports.up = function(knex) {
  return knex.schema.createTable('listas', table => {
    table.increments('id_lista').primary()
    table.timestamps('dt_lista')
    table.string('e_mail')
    table.string('ds_lista')
    table.string('st_inativo')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listas')
};
