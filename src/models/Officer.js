const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    post: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Officer', officerSchema);
