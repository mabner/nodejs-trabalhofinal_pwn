exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('products')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('products').insert([
				{
					id: 1,
					name: 'iPhone X',
					description: 'Amazing cellphone',
					price: 999.0,
				},
				{
					id: 2,
					name: 'Smartwatch',
					description: 'Amazing smartwatch',
					price: 349.0,
				},
				{
					id: 3,
					name: 'Moto G8',
					description: 'Luciano Store',
					price: 499.0,
				},
				{
					id: 4,
					name: 'Sansumg A40',
					description: 'Mariana Store',
					price: 599.0,
				},
				{
					id: 5,
					name: 'Sony Xperia',
					description: 'Rafael Stores',
					price: 399.0,
				},
			]);
		});
};
