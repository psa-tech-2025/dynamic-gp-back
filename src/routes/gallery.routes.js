const express = require('express');
const Gallery = require('../models/Gallery');

const router = express.Router();

/* GET ALL */
router.get('/', async (req, res) => {
  const data = await Gallery.find().sort({ createdAt: -1 });
  res.json(data);
});

/* CREATE */
router.post('/', async (req, res) => {
  const gallery = new Gallery(req.body);
  await gallery.save();
  res.json(gallery);
});

/* UPDATE */
router.put('/:id', async (req, res) => {
  const updated = await Gallery.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE */
router.delete('/:id', async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
