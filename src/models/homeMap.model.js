const mongoose = require('mongoose');

const HomeMapSchema = new mongoose.Schema(
  {
    title: String,
    address: String,
    mapEmbedUrl: String,
    mapLink: String
  },
  { timestamps: true }
);

HomeMapSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('HomeMap', HomeMapSchema);
