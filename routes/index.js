const router = require('express').Router();
// const apiRoutes = require('./htmlRoutes');
const htmlRoutes = require('./apiRoutes');

// router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;