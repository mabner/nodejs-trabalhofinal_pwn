const knex = require('knex');
const knexConfigs = require('../knexfile');
const db = knex(knexConfigs.development);

const TABLE_NAME = 'tarefas';
//
// Drop tabela Tarefas, para criá-la vazia.
//
db.schema.dropTable(TABLE_NAME);
//
// Criando a tabela Lista vazia.
//
db.schema.createTableIfNotExists(TABLE_NAME, function (table) {
    table.increments(id_tarefa);
    table.integer(id_lista);
    table.timestamps(dt_tarefa);
    table.string(ds_tarefa);
    table.string(st_inativo);
});