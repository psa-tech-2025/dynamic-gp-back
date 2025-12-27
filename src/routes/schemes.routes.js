const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/schemes.controller');

router.get('/', ctrl.getSchemes);          // 🌍 public
router.post('/', ctrl.createScheme);       // 🔐 admin
router.put('/:id', ctrl.updateScheme);     // 🔐 admin
router.delete('/:id', ctrl.deleteScheme);  // 🔐 admin

module.exports = router;
