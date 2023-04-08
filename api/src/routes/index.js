const { Router } = require('express');
const Activity = require('../models/activity');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./Country.js');
const activityRouter = require('./Activity.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter);
router.use('/activity', activityRouter);


router.get('/countries', async (req, res) => {
    const countries = await Country.findAll();
    res.json(countries);
  });
  
  router.get('/countries/:idPais', async (req, res) => {
    const country = await Country.findByPk(req.params.idPais, {
      include: {
        model: Activity
      }
    });
    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ message: 'Country not found' });
    }
  });
  
//   router.get('/countries/name', async (req, res) => {
//     const name = req.query.name.toLowerCase();
//   try {
//     const response = await axios.get(`https://restcountries.com/v3/name/${name}`);
//     const countries = response.data.map(country => ({
//       name: country.name.common,
//       capital: country.capital ? country.capital[0] : null,
//       population: country.population,
//       region: country.region,
//       subregion: country.subregion
//     }));
//     res.json(countries);
//   } catch (error) {
//     res.json({ message: 'No se encontraron países.' });
//   }
// });
  
  router.post('/activities', async (req, res) => {
    const { id, name, difficulty, duration, season} = req.body;
    const activity = await Activity.findOrCreate({ id, name, difficulty, duration, season }); 
    await activity.setCountries(countries);
    res.json(activity);
  });
  
  router.get('/activities', async (req, res) => {
    const activities = await Activity.findAll();
    res.json(activities);
  });

module.exports = router;
