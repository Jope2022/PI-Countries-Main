const { Activity } = require('../db');

async function createActivity (req, res) {
const { name, difficulty, duration, season, countryId } = req.body;
    try {
      if(!name || !difficulty || !duration || !season || !countryId ) throw new Error("Datos perdidos") 
        const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season, 
            countryId
         })
        res.status(201).json({newActivity});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
      }

module.exports = {
    createActivity,
  };