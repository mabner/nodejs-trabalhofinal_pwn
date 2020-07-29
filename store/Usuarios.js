const knexl = require('knex');
const knexConfigsl = require('../knexfile');
const dbU = knexl(knexConfigsl.development);

const TABLE_NAME = 'usuarios';

module.exports = {
    getU() {
        return dbU(TABLE_NAME).select('*');
    },
    getUbyID(usr_id) {
        return dbU(TABLE_NAME).select('*')
            .where('id_usr', usr_id);
    },
    getUbyNM(usr_nm) {
        return dbU(TABLE_NAME).select('*')
            .where('nm_usr', 'like', '%' + usr_nm + '%');
    },
    getUbyEM(usr_email) {
        return dbU(TABLE_NAME).select('*')
            .where('e_mail', usr_email);
    },
    insertU(usuario) {
        return dbU(TABLE_NAME).insert(usuario);
    },
    deleteU(usr_id) {
        return dbU(TABLE_NAME)
            .where('id_usr', usr_id)
            .del();
    },
    updateU(usuario) {
        return dbU(TABLE_NAME)
            .where('id_usr', usuario.id_usr)
            .update({
                nm_usr: usuario.nm_usr,
                e_mail: usuario.e_mail,
                st_inativo: usuario.st_inativo
            });
    }
}