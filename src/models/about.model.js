const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    intro: String,
    historyDesc: String,
    objectivesList: [String],
    servicesIntro: String,
    servicesList: [String],
    contactAddress: String,
    contactPhone: String,
    contactEmail: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', AboutSchema);
