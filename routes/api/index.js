const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Use thought and user routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
