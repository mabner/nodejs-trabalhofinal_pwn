exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('usuarios').del()
        .then(function () {
            // Inserts seed entries
            return knex('usuarios').insert([
                {
                    id_usr: null,
                    dt_usr: '25/07/2020 13:23:01',
                    e_mail: 'lromerosl@yahoo.com.br',
                    nm_usr: 'Luciano Lima',
                    st_inativo: 'N'
                },
            ]);
        });
};
