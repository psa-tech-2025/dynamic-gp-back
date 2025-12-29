const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    projectId: {
    type: String,
    required: true,
    index: true
  },
  title: { type: String, required: true },
  description: String,
  link: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
