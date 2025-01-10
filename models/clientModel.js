const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
