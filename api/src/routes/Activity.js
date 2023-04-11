const express = require('express');
const router = express.Router();
const { createActivity } = require("../controllers/activity.Pos.controlles");
const {  getActivity } = require("../controllers/activity.Get.controlles");

router.post('/', createActivity);
router.get('/', getActivity);







module.exports = router;