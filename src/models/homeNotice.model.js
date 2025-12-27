const mongoose = require('mongoose');

const HomeNoticeSchema = new mongoose.Schema(
  { text: { type: String, required: true } },
  { timestamps: true }
);

HomeNoticeSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('HomeNotice', HomeNoticeSchema);
