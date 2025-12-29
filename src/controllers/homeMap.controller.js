const HomeMap = require('../models/homeMap.model');

exports.getAll = async (req, res) => {
  res.json(await HomeMap.find({ projectId: req.projectId }));
};

exports.create = async (req, res) => {
  res.status(201).json(
    await HomeMap.create({
      ...req.body,
      projectId: req.projectId
    })
  );
};

exports.update = async (req, res) => {
  res.json(
    await HomeMap.findOneAndUpdate(
      { _id: req.params.id, projectId: req.projectId },
      req.body,
      { new: true }
    )
  );
};

exports.remove = async (req, res) => {
  await HomeMap.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });
  res.json({ success: true });
};
