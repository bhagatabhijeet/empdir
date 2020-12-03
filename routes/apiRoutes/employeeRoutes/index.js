const router = require('express').Router();
const employeeController = require('../../../controllers/employeeController');

// ** api/employees route
router.route('/')
  .get(employeeController.getNonSensitiveData);

module.exports = router;

