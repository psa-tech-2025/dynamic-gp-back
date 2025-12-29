const Scheme = require('../models/scheme.model');

/* GET – Public */
exports.getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find({
      projectId: req.projectId
    }).sort({ createdAt: -1 });

    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* POST – Admin */
exports.createScheme = async (req, res) => {
  try {
    const scheme = new Scheme({
      ...req.body,
      projectId: req.projectId
    });

    await scheme.save();
    res.status(201).json(scheme);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* PUT – Admin */
exports.updateScheme = async (req, res) => {
  try {
    const scheme = await Scheme.findOneAndUpdate(
      { _id: req.params.id, projectId: req.projectId },
      req.body,
      { new: true }
    );

    res.json(scheme);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* DELETE – Admin */
exports.deleteScheme = async (req, res) => {
  try {
    await Scheme.findOneAndDelete({
      _id: req.params.id,
      projectId: req.projectId
    });

    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
