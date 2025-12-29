const HomeIntro = require('../models/homeIntro.model');

exports.getAll = async (req, res) =>
  res.json(
    await HomeIntro.find({ projectId: req.projectId })
      .sort({ createdAt: -1 })
  );

exports.create = async (req, res) =>
  res.status(201).json(
    await HomeIntro.create({
      ...req.body,
      projectId: req.projectId
    })
  );

exports.update = async (req, res) =>
  res.json(
    await HomeIntro.findOneAndUpdate(
      { _id: req.params.id, projectId: req.projectId },
      req.body,
      { new: true }
    )
  );

exports.remove = async (req, res) => {
  await HomeIntro.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });
  res.json({ success: true });
};
