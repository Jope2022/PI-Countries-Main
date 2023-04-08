const express = require('express');
const router = express.Router();
const { createActivity } = require('../controllers/activity.controlles');

router.post('/', createActivity);

module.exports = router;