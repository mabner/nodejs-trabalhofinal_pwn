const knexl = require('knex');
const knexConfigsl = require('../knexfile');
const dbl = knexl(knexConfigsl.development);

const TABLE_NAME = 'listas';

module.exports = {
    getL() {
       return dbl(TABLE_NAME).select('*');
    },
    getLbyID(lista_id) {
        return dbl(TABLE_NAME).select('*')
        .where('id_lista', lista_id);
    },    
    getLbyNM(lista_ds) {
        return dbl(TABLE_NAME).select('*')
        .where('ds_lista', 'like', '%' + lista_ds + '%');
    },    
    insertL(lista) {
        return dbl(TABLE_NAME).insert(lista);
    },
    deleteL(lista_id) {
        return dbl(TABLE_NAME)
            .where('id_lista', lista_id)
            .del();
    },
    updateL(lista) {
        return dbl(TABLE_NAME)
            .where('id_lista', lista.id_lista)
            .update({
                ds_lista: lista.ds_lista,
                st_inativo: lista.st_inativo
            });
    }
}