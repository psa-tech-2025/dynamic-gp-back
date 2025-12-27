const router = require('express').Router();
const ctrl = require('../controllers/reports.controller');

router.get('/', ctrl.getReports);
router.post('/', ctrl.createReport);
router.put('/:id', ctrl.updateReport);
router.delete('/:id', ctrl.deleteReport);

module.exports = router;
