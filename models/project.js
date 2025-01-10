const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  deadline: { type: Date, required: true },
  budget: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
