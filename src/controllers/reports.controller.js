const Report = require('../models/report.model');

exports.getReports = async (req, res) => {
  const data = await Report.find({
    projectId: req.projectId
  }).sort({ createdAt: -1 });

  res.json(data);
};

exports.createReport = async (req, res) => {
  const report = await Report.create({
    ...req.body,
    projectId: req.projectId
  });

  res.status(201).json(report);
};

exports.updateReport = async (req, res) => {
  const report = await Report.findOneAndUpdate(
    { _id: req.params.id, projectId: req.projectId },
    req.body,
    { new: true }
  );

  res.json(report);
};

exports.deleteReport = async (req, res) => {
  await Report.findOneAndDelete({
    _id: req.params.id,
    projectId: req.projectId
  });

  res.json({ success: true });
};
