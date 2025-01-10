const express = require('express');
const { signup } = require('../controllers/userController'); // Adjust the path if needed

const router = express.Router();

// Define user signup route
router.post('/signup', signup);

module.exports = router;
