var mongoose = require('./mongoSchema')
const { Schema } = mongoose;

const shoppinglist = new Schema({
    id:  String, // String is shorthand for {type: String}
    name: String,
    price:  Number
  });
  
  const shoppinglistConnect = mongoose.model('shoppinglist', shoppinglist);
  
  module.exports = shoppinglistConnect;