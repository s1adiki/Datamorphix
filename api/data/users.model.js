var mongoose = require('mongoose');



/*var userBotauthorizedSchema = new mongoose.Schema({
  bot_name : {
    type : String,
    required : true
  },
  usage_type : {
    type : String,
    required : true
  },

  createdOn : {
    type : Date,
    "default" : Date.now
  }
});
*/
var integrationServerSchema = new mongoose.Schema({
  IP_address : {
    type : String,
    required : true
  },
  dommainName : {
    type : String,
    required : true
  },

  services_requested : {
    type : [String],
  },
  enterpriseIP : {
    type : String,
    required : true
  },

  enterpriseDomain : {
    type : String,
    required : true
  },

  accessUser : {
    type : String,
    required : true
  },

  access_password : {
    type : String,
    required : true
  },
  dbname : {
    type : String,
    required : true
  }
});


var userBotSchema = new mongoose.Schema({
  bot_name : {
    type : String,
    required : true
  },
  number_instance : {
    type : String,
    required : true
  },

  createdOn : {
    type : Date,
    "default" : Date.now
  }
});


var userBotSavedSchema = new mongoose.Schema({
 bot_name : {
    type : String,
    required : true
  },
   bot_user_name : {
    type : String,
    required : true
  },
  bot_script : {
    type : String,
    required : true
  },
  bot_status : {
    type : String
    
  },
  bot_developer : {
    type : String
    
  },

  createdOn : {
    type : Date,
    "default" : Date.now
  }
});


var usermanagementschema = new mongoose.Schema({
 firstname : {
    type : String,
    required : true
  },
  lastname : {
    type : String,
    required : true
  },
   email : {
    type : String,
    required : true
  },
   empId : {
    type : String,
    required : true
  },
  Department : {
    type : String,
    required : true
  },
   Role : {
    type : String,
    required : true
  },
  manager_ID : {
    type : String,
    required : true
  },
  bot_info : {
    type : String,
    required : true
  },
   bot_service : {
    type : String,
    required : true
  },
  bot_help : {
    type : String,
    required : true
  },
/*   motion_bot_id_info : {
    type : String,
    required : true
  }, 
   motion_bot_id_service : {
    type : String,
    required : true
  }, 
   motion_bot_id_custom : {
    type : String,
    required : true
  },*/
   start_date : {
    type : String,
    required : true
  },
   end_date : {
    type : String,
    required : true
  },       
  createdOn : {
    type : Date,
    "default" : Date.now
  }
});


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
    type:String,
    required: true
  },
  contact:{
    type:String,
    required: true
  },
  plan: String,
  url: String,
  personal_banking:String,
  organization:String,
  site_info:String,
  bot_registered:[userBotSchema],
  bots_saved:[userBotSavedSchema],
  user_management:[usermanagementschema],
  integration_server:[integrationServerSchema]
});




mongoose.model('User', userSchema);
//mongoose.model('User_mngmnt', usermanagementschema);
