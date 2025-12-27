const HomeNotice = require('../models/homeNotice.model');

exports.getAll = async (req, res) => {
  res.json(await HomeNotice.find().sort({ createdAt: -1 }));
};

exports.create = async (req, res) => {
  const notice = await HomeNotice.create(req.body);
  res.status(201).json(notice);
};

exports.update = async (req, res) => {
  const notice = await HomeNotice.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(notice);
};

exports.remove = async (req, res) => {
  await HomeNotice.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
