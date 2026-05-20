const express = require('express');
const router = express.Router();
const creatorController = require('../controllers/creatorController');

router.get('/', creatorController.getAllCreators);
router.get('/:id', creatorController.getCreatorById);
router.get('/username/:username', creatorController.getCreatorByUsername);
router.post('/', creatorController.upsertCreator);
router.delete('/:id', creatorController.deleteCreator);
router.post('/:id/attendance', creatorController.addAttendance);

module.exports = router;
