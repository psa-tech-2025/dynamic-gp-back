const Report = require('../models/report.model');

exports.getReports = async (req, res) => {
  const data = await Report.find().sort({ createdAt: -1 });
  res.json(data);
};

exports.createReport = async (req, res) => {
  const report = await Report.create(req.body);
  res.status(201).json(report);
};

exports.updateReport = async (req, res) => {
  const report = await Report.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(report);
};

exports.deleteReport = async (req, res) => {
  await Report.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
