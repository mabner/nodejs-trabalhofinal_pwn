const knexl = require('knex');
const knexConfigsl = require('../knexfile');
const dbL = knexl(knexConfigsl.development);

const TABLE_NAME = 'listas';

module.exports = {
    getL(user) {
        return dbL(TABLE_NAME).select('*').where('e_mail', user);
    },
    getLA(user, lista_st) {
        return dbL(TABLE_NAME).select('*').where('st_inativo', lista_st).andWhere('e_mail', user);
    },
    getLbyID(lista_id) {
        return dbL(TABLE_NAME).select('*')
            .where('id_lista', lista_id);
    },
    getLbyNM(lista_ds) {
        return dbL(TABLE_NAME).select('*')
            .where('ds_lista', 'like', '%' + lista_ds + '%');
    },
    insertL(lista) {
        return dbL(TABLE_NAME).insert(lista);
    },
    deleteL(lista_id) {
        return dbL(TABLE_NAME)
            .where('id_lista', lista_id)
            .del();
    },
    updateL(lista) {
        return dbL(TABLE_NAME)
            .where('id_lista', lista.id_lista)
            .update({
                ds_lista: lista.ds_lista,
                st_inativo: lista.st_inativo
            });
    }
}