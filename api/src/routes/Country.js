 const express = require('express');
 const router = express.Router();

 const {getCountries, getByCountryId, getCountriesByName } = require('../controllers/country.controlles');

 
 router.get('/', getCountries);
 router.get('/:idPais', getByCountryId);
 router.get('/countries/name', getCountriesByName);
 
 module.exports = router;