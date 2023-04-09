const express = require('express');
const router = express.Router();
const { createActivity, getActivity } = require("../controllers/activity.controlles");

router.post('/', createActivity);
router.get('/activities', getActivity);
module.exports = router;

