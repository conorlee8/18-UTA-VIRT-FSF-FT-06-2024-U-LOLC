const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// Example user data
const users = [];

// Define GET route to retrieve all users
router.get('/', (req, res) => {
  res.json(users);
});

// Define POST route to create a new user
router.post('/', (req, res) => {
  const newUser = {
    id: uuidv4(),  // Generate a unique ID for each user
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.json(newUser);
});

// Define DELETE route to delete a user by ID
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);  // Remove the user from the array
    res.json({ message: 'User deleted', user: deletedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
