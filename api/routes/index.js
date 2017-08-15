var express = require('express');
var router = express.Router();



var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlServices = require('../controllers/services.controllers.js');

router
  .route('/users/submiturl')
  .post(ctrlUsers.authenticate,ctrlUsers.call_python,ctrlUsers.submiturl);
router
  .route('/users/scrape_data')
  .post(ctrlUsers.authenticate,ctrlUsers.scrape_data);

// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
  .route('/users/register_update')
  .post(ctrlUsers.register_update);

router
  .route('/users/register_delete_bot')
  .post(ctrlUsers.register_delete_bot);

router
  .route('/users/Integration_delete')
  .post(ctrlUsers.authenticate,ctrlUsers.Integration_delete);

router
  .route('/users/register_bot')
  .post(ctrlUsers.register_bot);

router
  .route('/users/register_email')
  .post(ctrlUsers.register_email);

router
  .route('/users/register_update_email')
  .post(ctrlUsers.register_update_email);


router
  .route('/users/register_auth')
  .post(ctrlUsers.register_auth);

router
  .route('/users/register_auth_mngmnt')
  .post(ctrlUsers.authenticate,ctrlUsers.register_auth_mngmnt);


router
  .route('/users/edit_user_updated')
  .post(ctrlUsers.authenticate,ctrlUsers.edit_user_updated);

router
  .route('/users/register_auth_mngmnt_bot')
  .get(ctrlUsers.authenticate,ctrlUsers.register_auth_mngmnt_bot);

router
  .route('/users/delete_user_management')
  .post(ctrlUsers.authenticate,ctrlUsers.delete_user_management);

router
  .route('/users/login')
  .post(ctrlUsers.login)
  .get(ctrlUsers.authenticate,ctrlUsers.login_validation);

router
  .route('/users/password')
  .post(ctrlUsers.password);

router
  .route('/users/frget_email')
  .post(ctrlUsers.frget_email);

router
  .route('/users/frget_email_support')
  .post(ctrlUsers.frget_email_support);

router
  .route('/users/chng_password_email')
  .post(ctrlUsers.chng_password_email);

router
  .route('/users/chng_password')
  .post(ctrlUsers.chng_password);

router
  .route('/users/chng_password_update')
  .post(ctrlUsers.authenticate,ctrlUsers.chng_password_update);

router
  .route('/users/pswrd_change_user')
  .post(ctrlUsers.authenticate,ctrlUsers.pswrd_change_user);

router
  .route('/users/store_script')
  .post(ctrlUsers.authenticate,ctrlUsers.store_script);

router
  .route('/users/register_auth_mngmnt_bot_dashboard')
  .get(ctrlUsers.register_auth_mngmnt_bot_dashboard);

router
  .route('/users/store_bot_script')//not implemented in front endstore_bot_script_enduser
  .post(ctrlUsers.authenticate,ctrlUsers.store_bot_script);

router
  .route('/users/store_bot_script_enduser')//not implemented in front end store_bot_script_enduser_developer
  .post(ctrlUsers.authenticate,ctrlUsers.store_bot_script_enduser);

router
  .route('/users/store_bot_script_enduser_developer')//not implemented in front end 
  .post(ctrlUsers.authenticate,ctrlUsers.store_bot_script_enduser_developer);

router
  .route('/users/store_bot_script_develop')
  .post(ctrlUsers.store_bot_script_develop);

router
  .route('/users/get_bot_script_saved')
  .get(ctrlUsers.authenticate,ctrlUsers.get_bot_script_saved);

router
  .route('/users/get_script_admin')
  .post(ctrlUsers.authenticate,ctrlUsers.get_script_admin);

router
  .route('/users/get_script')
  .post(ctrlUsers.authenticate,ctrlUsers.get_script);

router
  .route('/users/get_script_deploy')
  .post(ctrlUsers.authenticate,ctrlUsers.get_script_deploy);

router
  .route('/users/scrape')
  .post(ctrlUsers.authenticate,ctrlUsers.scrape);

router
  .route('/users/get_usr_integration_service_saved')
  .get(ctrlUsers.authenticate,ctrlUsers.get_usr_integration_service_saved);


// Json data
router
  .route('/users/json')
  .post(ctrlUsers.authenticate,ctrlUsers.json);
 
router
  .route('/users/admin_dashboard')
  .get(ctrlUsers.authenticate,ctrlUsers.admin_dashboard)
  .post(ctrlUsers.admin_dashboard_getscript);

router
  .route('/users/admin_dashboard_integration')
  .get(ctrlServices.admin_dashboard_integration)
  .post(ctrlServices.admin_dashboard_integration_submit);
router
  .route('/users/admin_dashboard_integration_ser_hsted')
  .post(ctrlServices.admin_dashboard_integration_ser_hsted);
router
  .route('/users/admin_dashboard_integration_usr_submit')
  .post(ctrlUsers.authenticate,ctrlUsers.admin_dashboard_integration_usr_submit);

module.exports = router;
