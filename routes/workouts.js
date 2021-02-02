const express = require('express');
const router = express.Router();// express router, new router object
const ctrl = require('../controllers');

router.get('/', ctrl.workouts.index);
router.get('/new', ctrl.workouts.newWorkout);
router.get('/:index', ctrl.workouts.show);
router.post('/', ctrl.workouts.create);

module.exports = router;