/**
 * Simple Express server to run the serverless function locally
 */

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load backend environment variables from .env.backend
dotenv.config({ path: '.env.backend' });

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Import the subscribe handler from the serverless function
const subscribeHandler = require('./src/api/subscribe').default || require('./src/api/subscribe');

app.post('/api/subscribe', (req, res) => {
  subscribeHandler(req, res);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
