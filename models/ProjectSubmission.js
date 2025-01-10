const mongoose = require('mongoose'); // Import mongoose

const projectSubmissionSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    deadline: Date,
    budget: Number,
});

module.exports = mongoose.model('ProjectSubmission', projectSubmissionSchema);
