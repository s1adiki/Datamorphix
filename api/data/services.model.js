var mongoose = require('mongoose');





var servicesSchema = new mongoose.Schema({


IP_address : {
    type : String,
    required : true
  },
services_name : {
    type : String,
    required : true
  },
 services_hosted : {
    type : [String],
  }
 


});





mongoose.model('Services', servicesSchema);