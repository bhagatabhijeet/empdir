const router = require('express').Router();
const apiRoutes = require('./apiRoutes');



// *** /api Route
router.use('/api', apiRoutes);


module.exports = router;
