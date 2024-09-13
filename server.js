const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();  // Ensure environment variables are loaded

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);  // Use the routes

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
