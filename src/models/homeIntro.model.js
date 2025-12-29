const mongoose = require('mongoose');

const HomeIntroSchema = new mongoose.Schema(
  {
        projectId: {
    type: String,
    required: true,
    index: true
  },
    nameText: String,
    postText: String,
    introText: String,
    images: [String],
    uid: String
  },
  { timestamps: true }
);

HomeIntroSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('HomeIntro', HomeIntroSchema);
