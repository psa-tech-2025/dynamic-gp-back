const Gallery = require('../models/gallery.model');

exports.getAll = async (req, res) => {
  const data = await Gallery.find().sort({ createdAt: -1 });
  res.json(data);
};

exports.create = async (req, res) => {
  const count = await Gallery.countDocuments();
  if (count >= 10) {
    return res.status(400).json({ message: 'Max 10 images allowed' });
  }

  const item = await Gallery.create(req.body);
  res.status(201).json(item);
};

exports.update = async (req, res) => {
  const updated = await Gallery.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
