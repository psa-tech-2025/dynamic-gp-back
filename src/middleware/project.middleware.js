module.exports = (req, res, next) => {

  // ✅ Allow static image access
  if (req.path.startsWith('/uploads')) {
    return next();
  }

  // ✅ Allow OPTIONS
  if (req.method === 'OPTIONS') {
    return next();
  }

  const projectId = req.header('X-Project-Id');

  if (!projectId) {
    return res.status(400).json({ message: 'Project ID missing' });
  }

  req.projectId = projectId;
  next();
};
