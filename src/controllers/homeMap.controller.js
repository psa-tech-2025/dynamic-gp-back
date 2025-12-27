const HomeMap = require('../models/homeMap.model');

exports.getAll = async (_, res) => res.json(await HomeMap.find());
exports.create = async (req, res) => res.status(201).json(await HomeMap.create(req.body));
exports.update = async (req, res) =>
  res.json(await HomeMap.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log('DELETE MAP:', id);

  if (!id) {
    return res.status(400).json({ message: 'ID missing' });
  }

  await HomeMap.findByIdAndDelete(id);
  res.json({ success: true });
};
