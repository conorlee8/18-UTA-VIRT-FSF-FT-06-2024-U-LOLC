const router = require('express').Router();

// Example data to simulate a thought retrieval
const thoughts = [
  { id: 1, thoughtText: 'This is thought 1' },
  { id: 2, thoughtText: 'This is thought 2' }
];

// Define your thought routes here:
router.get('/', (req, res) => {
  res.json(thoughts);  // Return a JSON response
});

module.exports = router;
