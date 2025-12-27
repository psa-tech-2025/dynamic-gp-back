const Model = require('../models/homeAnnouncement.model');

exports.getAll = async (_, res) => res.json(await Model.find());
exports.create = async (req, res) => res.status(201).json(await Model.create(req.body));
exports.update = async (req, res) =>
  res.json(await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => {
  await Model.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
