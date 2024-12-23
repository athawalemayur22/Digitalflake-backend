const mongoose = require('mongoose');
require('../db_connection');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true,
    index:true,
  },
  password: {
    type: String,
    required: true,
  },
},{timestamps:true});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;