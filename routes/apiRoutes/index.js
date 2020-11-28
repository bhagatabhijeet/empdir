const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');



// *** /api Route
router.use('/employees', employeeRoutes);


module.exports = router;