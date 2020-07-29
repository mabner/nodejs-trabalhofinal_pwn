const knex = require('knex');
const knexConfigs = require('../knexfile');
const db = knex(knexConfigs.development);

const TABLE_NAME = 'products';

module.exports = {
    get() {
        return db(TABLE_NAME).select('*');
    },
    getbyID(product_id) {
        return db(TABLE_NAME).select('*')
            .where('id', product_id);
    },
    getbyNM(product_nm) {
        return db(TABLE_NAME).select('*')
            .where('name', 'like', '%' + product_nm + '%');
    },
    getbyPR(product_preco) {
        return db(TABLE_NAME).select('*')
            .where('price', '<=', product_preco);
    },
    getbyPRI(product_precoI, product_precoF) {
        return db(TABLE_NAME).select('*')
            .where('price', '>=', product_precoI).andWhere('price', '<=', product_precoF);
    },
    insert(product) {
        return db(TABLE_NAME).insert(product);
    },
    delete(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .del();
    },
    update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    }
}