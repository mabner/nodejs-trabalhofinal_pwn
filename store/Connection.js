const mongoose = require('mongoose');

//New Server Discover and Monitoring engine, removes the message about current being deprecated
mongoose.set('useUnifiedTopology', true);
//MongoDB connection
const connectionString =
	'mongodb+srv://mrfishman:GACjfWg5FJD3Qj2@cluster0.060t3.gcp.mongodb.net/puc?retryWrites=true&w=majority';

const openConnection = () =>
	mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
	openConnection,
};
