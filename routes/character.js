const express = require('express');
const router = express.Router();

// Define your character routes here
router.get('/', (req, res) => {
  res.send('This is the characters route!');
});

module.exports = router;
