const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Ensure this line is present

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api', require('./routes/api')); // Example route setup

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
