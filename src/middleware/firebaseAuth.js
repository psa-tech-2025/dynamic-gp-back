const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('../../firebase-admin.json'))
});

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });

  try {
    req.user = await admin.auth().verifyIdToken(token);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
