var mongoose = require('mongoose');
var Services = mongoose.model('Services');


module.exports.admin_dashboard_integration = function(req, res) {

	Services.distinct("services_name").exec(function(err, user) {
		if (err) {
			console.log(err);
			res.status(400).json(err);
	    } else {	      
	        console.log(user);
	        res.status(200).json(user);
	    }
	});
};



module.exports.admin_dashboard_integration_submit = function(req, res) {
	Services.create({
    IP_address: req.body.IP_address,
	services_name:req.body.services_name,
	services_hosted:req.body.services_hosted
  }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      
      res.status(201).json(user);
    }
  });

};




module.exports.admin_dashboard_integration_ser_hsted = function(req, res) {

	Services.findOne({services_name:req.body.services_name}).exec(function(err, user) {
		if (err) {
			console.log(err);
			res.status(400).json(err);
	    } else {	      
	        console.log(user);
	        res.status(200).json(user);
	    }
	});
};

