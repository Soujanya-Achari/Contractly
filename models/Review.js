const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reviewedId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, enum: ['client', 'contractor', 'worker'], required: true },
    rating: { type: Number, min: 1, max: 5, required: true }, // e.g., 1 to 5 stars
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
