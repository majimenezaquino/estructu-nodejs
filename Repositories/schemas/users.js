const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name:  String,
  email: String,
  age: { type: Date },
  status: String
});

module.exports =mongoose.model('Users',usersSchema)