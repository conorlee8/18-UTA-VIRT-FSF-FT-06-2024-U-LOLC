const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// Example thought data
const thoughts = [];

// Define GET route to retrieve all thoughts
router.get('/', (req, res) => {
  res.json(thoughts);
});

// Define POST route to create a new thought
router.post('/', (req, res) => {
  const newThought = {
    id: uuidv4(),  // Generate a unique ID for each thought
    thoughtText: req.body.thoughtText,
    username: req.body.username,
  };
  thoughts.push(newThought);
  res.json(newThought);
});

// Define DELETE route to delete a thought by ID
router.delete('/:id', (req, res) => {
  const thoughtId = req.params.id;
  const index = thoughts.findIndex(thought => thought.id === thoughtId);

  if (index !== -1) {
    const deletedThought = thoughts.splice(index, 1);  // Remove the thought from the array
    res.json({ message: 'Thought deleted', thought: deletedThought });
  } else {
    res.status(404).json({ message: 'Thought not found' });
  }
});

module.exports = router;
