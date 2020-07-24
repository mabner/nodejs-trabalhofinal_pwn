
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tarefas').del()
    .then(function () {
      // Inserts seed entries
      return knex('tarefas').insert([
        { id_tarefa: null, id_lista: 1, dt_tarefa: '22/07/2020 02:00:01', ds_tarefa: 'Amazing cellphone', st_inativo: 'N' },
        { id_tarefa: null, id_lista: 1, dt_tarefa: '22/07/2020 02:00:02', ds_tarefa: 'Amazing smartwatch', st_inativo: 'N' },
        { id_tarefa: null, id_lista: 3, dt_tarefa: '22/07/2020 02:00:03', ds_tarefa: 'Luciano Store', st_inativo: 'N' },
        { id_tarefa: null, id_lista: 4, dt_tarefa: '22/07/2020 02:00:04', ds_tarefa: 'Mariana Store', st_inativo: 'N' },
        { id_tarefa: null, id_lista: 5, dt_tarefa: '22/07/2020 02:00:05', ds_tarefa: 'Rafael Stores', st_inativo: 'N' }
      ]);
    });
};
