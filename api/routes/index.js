var express = require('express');
var router = express.Router();



var ctrlUsers = require('../controllers/users.controllers.js');

router
  .route('/users/submiturl')
  .post(ctrlUsers.authenticate,ctrlUsers.submiturl);

// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
  .route('/users/login')
  .post(ctrlUsers.login);

// User data
/*router
  .route('/user/data')
  .get(ctrlUsers.authenticate,ctrlUsers.getdata)
*/
// Json data
router
  .route('/users/json')
  .post(ctrlUsers.authenticate,ctrlUsers.json);


module.exports = router;
