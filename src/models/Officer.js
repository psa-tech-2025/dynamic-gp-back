const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema(
  {
      projectId: {
    type: String,
    required: true,
    index: true
  },
    name: { type: String, required: true },
    post: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Officer', officerSchema);
