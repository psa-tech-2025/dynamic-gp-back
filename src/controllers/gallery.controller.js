const Gallery = require('../models/gallery.model');

exports.getAll = async (req, res) => {
  const data = await Gallery.find({
    projectId: req.projectId
  }).sort({ createdAt: -1 });

  res.json(data);
};

exports.create = async (req, res) => {
  const count = await Gallery.countDocuments({
    projectId: req.projectId
  });

  if (count >= 10) {
    return res.status(400).json({
      message: 'Max 10 images allowed per project'
    });
  }

  const item = await Gallery.create({
    ...req.body,
    projectId: req.projectId
  });

  res.status(201).json(item);
};

exports.update = async (req, res) => {
  const updated = await Gallery.findOneAndUpdate(
    { _id: req.params.id, projectId: req.projectId },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Gallery.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });
  res.json({ success: true });
};
