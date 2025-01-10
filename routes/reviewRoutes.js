const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const User = require('../models/User'); // Assuming a User model is already defined

// Route to submit a review
router.post('/submit', async (req, res) => {
  try {
    const { reviewerId, reviewedId, role, rating, comment } = req.body;

    // Create a new review document
    const newReview = new Review({
      reviewerId,
      reviewedId,
      role,
      rating,
      comment
    });

    // Save the review to the database
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get reviews for a specific user
router.get('/reviews/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.find({ reviewedId: userId }).populate('reviewerId', 'name email');

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
