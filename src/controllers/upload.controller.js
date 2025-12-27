exports.uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'No file uploaded'
      });
    }

    // IMPORTANT: send URL back (avoid 204)
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

    return res.status(200).json({
      url: imageUrl
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
