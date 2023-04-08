const express = require('express');
const router = express.Router();
const {getCountries, getByCountryId } = require('../controllers/country.controlles');

router.get('/', getCountries);
router.get('/:idPais', getByCountryId);
//router.get('/name', getByCountryId);


module.exports = router;