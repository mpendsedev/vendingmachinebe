var mongoose = require('./mongoSchema')
const { Schema } = mongoose;

const finallist = new Schema({
    id:  String, // String is shorthand for {type: String}
    name: String,
    price:  Number
  });
  
  const finallistConnect = mongoose.model('finallist', finallist);
  
  module.exports = finallistConnect;