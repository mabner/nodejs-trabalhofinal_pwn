const knext = require('knex');
const knexConfigst = require('../knexfile');
const dbt = knext(knexConfigst.development);

const TABLE_NAME = 'tarefas';

module.exports = {
    gett() {
        return dbt(TABLE_NAME).select('*');
    },
    gettbyID(lista_id, tarefa_id) {
        return dbt(TABLE_NAME).select('*')
        .where('id_lista', lista_id).and('id_tarefa', tarefa_id);
    },    
    gettbyNM(tarefa_ds) {
        return dbt(TABLE_NAME).select('*')
        .where('ds_tarefa', 'like', '%' + tarefa_ds + '%');
    },    
    insertt(tarefa) {
        return dbt(TABLE_NAME).insert(lista);
    },
    deletet(tarefa_id) {
        return dbt(TABLE_NAME)
            .where('id_tarefa', tarefa_id)
            .del();
    },
    updatet(tarefa) {
        return IDBOpenDBRequest(TABLE_NAME)
            .where('id_tarefa', tarefa.id_tarefa)
            .update({
                ds_tarefa: tarefa.ds_tarefa,
                st_inativo: tarefa.st_inativo
            });
    }
}