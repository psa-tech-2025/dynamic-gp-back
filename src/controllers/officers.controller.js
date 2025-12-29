const Officer = require('../models/Officer');

exports.createOfficer = async (req, res) => {
  try {
    const officer = await Officer.create({
      ...req.body,
      projectId: req.projectId
    });

    res.status(201).json(officer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOfficers = async (req, res) => {
  try {
    const officers = await Officer.find({
      projectId: req.projectId
    }).sort({ createdAt: -1 });

    res.json(officers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOfficer = async (req, res) => {
  try {
    const officer = await Officer.findOneAndUpdate(
      { _id: req.params.id, projectId: req.projectId },
      req.body,
      { new: true }
    );

    res.json(officer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOfficer = async (req, res) => {
  try {
    await Officer.findOneAndDelete({
      _id: req.params.id,
      projectId: req.projectId
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
