const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes); // Ensure 'userRoutes' is correctly imported
router.use('/thoughts', thoughtRoutes); // Ensure 'thoughtRoutes' is correctly imported

module.exports = router;
