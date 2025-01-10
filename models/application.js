const mongoose = require('mongoose');

// Define the schema
const ApplicationSchema = new mongoose.Schema({
  contractorName: { type: String, required: true },
  email: { type: String, required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  applicationDate: { type: Date, default: Date.now },
});

// Avoid overwriting the model
const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

module.exports = Application;
