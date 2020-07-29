const knext = require('knex');
const knexConfigst = require('../knexfile');
const dbT = knext(knexConfigst.development);

const TABLE_NAME = 'tarefas';

module.exports = {
    getT() {
        return dbT(TABLE_NAME).select('*');
    },
    getTbyID(lista_id, tarefa_id) {
        return dbT(TABLE_NAME).select('*')
            .where('id_lista', lista_id).and('id_tarefa', tarefa_id);
    },
    getTbyNM(tarefa_ds) {
        return dbT(TABLE_NAME).select('*')
            .where('ds_tarefa', 'like', '%' + tarefa_ds + '%');
    },
    insertT(tarefa) {
        return dbT(TABLE_NAME).insert(tarefa);
    },
    deleteT(tarefa_id) {
        return dbT(TABLE_NAME)
            .where('id_tarefa', tarefa_id)
            .del();
    },
    updateT(tarefa) {
        return dbT(TABLE_NAME)
            .where('id_tarefa', tarefa.id_tarefa)
            .update({
                ds_tarefa: tarefa.ds_tarefa,
                st_inativo: tarefa.st_inativo
            });
    }
}