exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('tarefas')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tarefas').insert([
				{
					id_tarefa: null,
					id_lista: 23,
					dt_tarefa: '25/07/2020 13:20:01',
					ds_tarefa: 'Estudar Node.JS',
					st_inativo: 'N',
				},
				{
					id_tarefa: null,
					id_lista: 23,
					dt_tarefa: '25/07/2020 13:20:01',
					ds_tarefa: 'Estudar JavaScript',
					st_inativo: 'N',
				},
				{
					id_tarefa: null,
					id_lista: 23,
					dt_tarefa: '25/07/2020 13:20:01',
					ds_tarefa: 'Estudar LGPD',
					st_inativo: 'N',
				},
				{
					id_tarefa: null,
					id_lista: 24,
					dt_tarefa: '25/07/2020 13:20:01',
					ds_tarefa: 'Caminhada Diária',
					st_inativo: 'N',
				},
				{
					id_tarefa: null,
					id_lista: 25,
					dt_tarefa: '25/07/2020 13:20:01',
					ds_tarefa: 'Diverti-se',
					st_inativo: 'N',
				},
			]);
		});
};
