const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


router.get('/', projectController.searchProjects); // Route for searching projects


router.post('/submit', projectController.submitProject);
router.get('/projects', projectController.searchProjects);

module.exports = router;
