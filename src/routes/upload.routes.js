const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware');
const controller = require('../controllers/upload.controller');

// POST /api/upload
router.post('/upload', upload.single('file'), controller.uploadImage);

module.exports = router;
