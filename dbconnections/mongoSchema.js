
const mongoose = require('mongoose')
const { Schema } = mongoose;
//import schema



//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/vm';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


  
module.exports = mongoose;
