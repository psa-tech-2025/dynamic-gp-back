const HomeNotice = require('../models/homeNotice.model');

exports.getAll = async (req, res) => {
  res.json(
    await HomeNotice.find({ projectId: req.projectId })
      .sort({ createdAt: -1 })
  );
};

exports.create = async (req, res) => {
  const notice = await HomeNotice.create({
    ...req.body,
    projectId: req.projectId
  });
  res.status(201).json(notice);
};

exports.update = async (req, res) => {
  const notice = await HomeNotice.findOneAndUpdate(
    { _id: req.params.id, projectId: req.projectId },
    req.body,
    { new: true }
  );
  res.json(notice);
};

exports.remove = async (req, res) => {
  await HomeNotice.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });
  res.json({ success: true });
};
