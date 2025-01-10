const express = require('express');
const router = express.Router();
const ProjectSubmission = require('../models/ProjectSubmission'); // User Model
const Project = require('../models/Project');

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send({ message: 'Signup successful!' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to signup', details: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).send({ message: 'Login successful!', user });
        } else {
            res.status(401).send({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Failed to login', details: error.message });
    }
});


module.exports = router;
