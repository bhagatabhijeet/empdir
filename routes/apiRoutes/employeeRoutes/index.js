const router = require('express').Router();
const employeeController = require('../../../controllers/employeeController');


router.route('/')
  .get(employeeController.getNonSensitiveData);

module.exports = router;

