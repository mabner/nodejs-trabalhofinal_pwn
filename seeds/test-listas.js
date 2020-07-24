
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listas').del()
    .then(function () {
      // Inserts seed entries
      return knex('listas').insert([
        { id_lista: null, dt_lista: '22/07/2020 02:00:01', e_mail: 'lromerosl@yahoo.com.br', ds_lista: 'Amazing cellphone', st_inativo: 'N' },
        { id_lista: null, dt_lista: '22/07/2020 02:00:02', e_mail: 'lromerosl@yahoo.com.br', ds_lista: 'Amazing smartwatch', st_inativo: 'N' },
        { id_lista: null, dt_lista: '22/07/2020 02:00:03', e_mail: 'lromerosl@yahoo.com.br', ds_lista: 'Luciano Store', st_inativo: 'N' },
        { id_lista: null, dt_lista: '22/07/2020 02:00:04', e_mail: 'lromerosl@yahoo.com.br', ds_lista: 'Mariana Store', st_inativo: 'N' },
        { id_lista: null, dt_lista: '22/07/2020 02:00:05', e_mail: 'lromerosl@yahoo.com.br', ds_lista: 'Rafael Stores', st_inativo: 'N' }
      ]);
    });
};
