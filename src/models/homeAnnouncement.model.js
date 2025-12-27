const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  { text: String },
  { timestamps: true }
);

Schema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('HomeAnnouncement', Schema);
