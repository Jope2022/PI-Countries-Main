const express = require('express');
 const router = express.Router();

 const {getCountries} = require('../controllers/country.controlles');
 const {getByCountryId } = require('../controllers/country.Pais.controlles');
 const {getApiData} = require('../controllers/country.Name.Controlles');

 router.get('/', getCountries);
 router.get('/name', getApiData);
 router.get('/:idPais', getByCountryId);

 
 module.exports = router;
 