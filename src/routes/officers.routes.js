const router = require('express').Router();
const ctrl = require('../controllers/officers.controller');

router.post('/', ctrl.createOfficer);
router.get('/', ctrl.getOfficers);
router.put('/:id', ctrl.updateOfficer);
router.delete('/:id', ctrl.deleteOfficer);

module.exports = router;
