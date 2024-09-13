const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes'); // Make sure this line is correct

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);  // Route for thoughts

module.exports = router;
