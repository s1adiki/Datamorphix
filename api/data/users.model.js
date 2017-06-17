var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  email:{
    type:String
  },
  url: [String],
  personal_banking:String

});

mongoose.model('User', userSchema);
