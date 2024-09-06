const router = require('express').Router();
const { getAllThoughts, createThought } = require('../../controllers/thoughtControllers');

// Route to get all thoughts
router.route('/').get(getAllThoughts);

// Route to create a new thought
router.route('/').post(createThought);

module.exports = router;
