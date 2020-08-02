const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://DBlrsl:ebdgJDDQ0DLZbF3S@cluster0-llxlg.mongodb.net/Lromerosl?retryWrites=true&w=majority'
const connectionString = 'mongodb+srv://DBlrsl:1234509876@cluster0-llxlg.mongodb.net/Lromerosl?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true } )

module.exports = {
    openConnection,
}