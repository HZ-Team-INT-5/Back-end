const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.json()); 

// Endpoint for handling POST requests to authenticate users
router.post('/post-login', (req, res) => {
  // Read user credentials from the user.json file
  const userCredentials = JSON.parse(fs.readFileSync('users.json'));

  // Get the username and password from the request body
  const { username, password } = req.body;

  // Check if the provided credentials match the ones in user.json
  if (username === userCredentials.username && password === userCredentials.password) {
    // Authentication successful
    res.status(200).json({ message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
