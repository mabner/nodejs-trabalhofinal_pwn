const knex = require('knex');
const knexConfigs = require('../knexfile');
const db = knex(knexConfigs.development);

const TABLE_NAME = 'listas';
//
// Drop tabela Lista, para criá-la vazia.
//
db.schema.dropTable(TABLE_NAME);
//
// Criando a tabela Lista vazia.
//
db.schema.createTableIfNotExists(TABLE_NAME, function(table){
    table.increments(id_lista);
    table.timestamps(dt_lista);
    table.string(e_mail);
    table.string(ds_lista);
    table.string(st_inativo);
});