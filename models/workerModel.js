const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  trade: { type: String, required: true }, // e.g., carpenter, painter, etc.
  contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'Contractor' },
  availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);
