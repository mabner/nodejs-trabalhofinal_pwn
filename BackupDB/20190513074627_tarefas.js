exports.up = function(knex) {
  return knex.schema.createTable('tarefas', table => {
    table.increments('id_tarefa').primary()
    table.string('id_lista')
    table.timestamps('dt_tarefa')
    table.string('ds_tarefa')
    table.string('st_inativo')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tarefas')
};
