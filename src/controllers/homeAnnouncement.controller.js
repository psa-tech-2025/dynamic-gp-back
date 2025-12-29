const Model = require('../models/homeAnnouncement.model');

exports.getAll = async (req, res) =>
  res.json(await Model.find({ projectId: req.projectId }));

exports.create = async (req, res) =>
  res.status(201).json(
    await Model.create({
      ...req.body,
      projectId: req.projectId
    })
  );

exports.update = async (req, res) =>
  res.json(
    await Model.findOneAndUpdate(
      { _id: req.params.id, projectId: req.projectId },
      req.body,
      { new: true }
    )
  );

exports.remove = async (req, res) => {
  await Model.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });
  res.json({ success: true });
};
