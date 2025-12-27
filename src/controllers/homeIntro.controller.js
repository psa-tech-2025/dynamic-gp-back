const HomeIntro = require('../models/homeIntro.model');

exports.getAll = async (_, res) =>
  res.json(await HomeIntro.find().sort({ createdAt: -1 }));

exports.create = async (req, res) =>
  res.status(201).json(await HomeIntro.create(req.body));

exports.update = async (req, res) =>
  res.json(await HomeIntro.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log('DELETE HOME INTRO:', id);

  if (!id) {
    return res.status(400).json({ message: 'ID missing' });
  }

  await HomeIntro.findByIdAndDelete(id);
  res.json({ success: true });
};




