
const mongoose = require('mongoose')
const { Schema } = mongoose;


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/vm';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const shoppinglist = new Schema({
  id:  String, // String is shorthand for {type: String}
  name: String,
  price:  Number
});

const shoppinglistConnect = mongoose.model('shoppinglist', shoppinglist);

module.exports = shoppinglistConnect