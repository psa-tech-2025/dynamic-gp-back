const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/about.controller');

router.get('/', ctrl.getAbout);
router.put('/', ctrl.updateAbout);

module.exports = router;
