const { Activity } = require('../db');

const activities = [];
const getActivity = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.send(activities);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Error al obtener actividades' });
  }
}

module.exports = {
  getActivity
};