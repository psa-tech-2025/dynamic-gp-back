const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
        projectId: {
    type: String,
    required: true,
    index: true
  },
    url: { type: String, required: true },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);
