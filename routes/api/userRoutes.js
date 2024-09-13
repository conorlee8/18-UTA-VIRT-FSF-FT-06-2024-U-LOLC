const router = require('express').Router();

// Example data to simulate a user retrieval
const users = [
  { id: 1, name: 'User1', email: 'user1@example.com' },
  { id: 2, name: 'User2', email: 'user2@example.com' }
];

// Define your user routes here:
router.get('/', (req, res) => {
  res.json(users);  // Return a JSON response
});

module.exports = router;
