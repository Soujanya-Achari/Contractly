const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Notification = require('../models/notification');
const Project = require('../models/Project');

router.post('/apply', async (req, res) => {
  try {
    const { projectId } = req.body;

    if (!projectId) {
      return res.status(400).json({ message: 'Project ID is required.' });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    // Example contractor data (replace with logged-in contractor details)
    const contractorName = "Test Contractor";
    const email = "contractor@example.com";

    // Save the application
    const newApplication = new Application({
      contractorName,
      email,
      projectId,
      applicationDate: new Date(),
    });

    await newApplication.save();

    // Notify the client
    const notification = new Notification({
      clientId: project.clientId,
      message: `You have received a new application for your project "${project.title}" from ${contractorName}.`,
      applicationId: newApplication._id,
      date: new Date(),
    });

    await notification.save();

    res.status(200).json({
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
