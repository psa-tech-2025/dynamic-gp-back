const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema(
  {
    projectId: {
    type: String,
    required: true,
    index: true
  },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Scheme', SchemeSchema);
