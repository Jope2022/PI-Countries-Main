const { Country, Activity } = require('../db');

async function createActivity (req, res) {
const { name, difficulty, duration, season, countries } = req.body;

    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
       
        })
        console.log(newActivity)
        if (countries && countries.length) {
            const countriesDb = await Country.findAll({
              where: { name: countries },
            });
            await newActivity.addCountries(countriesDb);
          }
        res.status(201).json({ message: 'Actividad creada exitosamente' });
         
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Hubo un error al crear la actividad' });
        }
      }

//------------------------------get activity
async function getActivity (req, res) {

    try {
      const activities = await Activity.findAll();
      res.json(activities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al obtener las actividades turísticas' });
    }
  };






module.exports = {
    createActivity,
    getActivity
};