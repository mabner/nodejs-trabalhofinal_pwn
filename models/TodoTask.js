// Exporta o conteudo para MoongoDB
const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
	listID: {
		type: Number,
	},

	content: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model('TodoTask', todoTaskSchema);
