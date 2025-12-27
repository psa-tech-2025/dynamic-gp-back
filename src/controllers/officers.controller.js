const Officer = require('../models/Officer');

// POST /api/officers
exports.createOfficer = async (req, res) => {
  try {
    const officer = await Officer.create(req.body);
    res.status(201).json(officer); // 👈 201 success
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/officers
exports.getOfficers = async (req, res) => {
  try {
    const officers = await Officer.find().sort({ createdAt: -1 });
    res.json(officers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/officers/:id
exports.updateOfficer = async (req, res) => {
  try {
    const officer = await Officer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(officer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/officers/:id
exports.deleteOfficer = async (req, res) => {
  try {
    await Officer.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
