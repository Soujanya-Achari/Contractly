const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');
const Project = require('../models/Project');

// Assuming you have an auth middleware

// Route to send notification to the client when an application is submitted
router.post('/notify-client', async (req, res) => {
  const { projectId } = req.body;

  if (!projectId) {
    return res.status(400).json({ message: 'Project ID is required.' });
  }

  try {
    // Find the project and get the client's ID
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    // Create a notification for the client
    const notification = new Notification({
      clientId: project.clientId,  // Assuming clientId is a field in your Project model
      message: `You have received a new application for your project "${project.title}".`,
      date: new Date(),
    });

    await notification.save();
    res.status(200).json({ message: 'Notification sent to the client successfully.' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Fetch notifications for the client (Ensure the user is authenticated)
router.get('/client-notifications', async (req, res) => {
    try {
      // Temporary: Replace `req.user._id` with a hardcoded client ID for testing
      const clientId = "your-test-client-id"; // Replace with a valid client ID from your database
      const notifications = await Notification.find({ clientId }).sort({ createdAt: -1 });
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching notifications' });
    }
  });
  

module.exports = router;
