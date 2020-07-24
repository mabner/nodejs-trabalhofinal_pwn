const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://DBlrsl:1234509876@cluster0-llxlg.mongodb.net/Lucianorsl?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true } )

module.exports = {
    openConnection,
}