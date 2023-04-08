const { Country, Activity } = require ('../db');
const {Op} = require('sequelize');
const { getDbData } = require('../controllers/api.controllers');

async function getCountries (req, res) {
     const { name } = req.query;
     const dbData = await getDbData();
     if (!name) return res.status(200).send(dbData);
     try {
         const list = await Country.findAll({
             include: Activity,
             where: {
                 name: {
                     [Op.substring]: `${name}`
                 }
             }
         })
         list.length ? res.send(list.map(country => country)) :
        res.status(404).send({message: "Country does not found"});
     }catch(error) {
         console.log(error);
     }
 }

 async function getByCountryId (req, res) {
    const { id } = req.params;
     if (!id) return res.status(404).send({message: 'Debes ingresar un ID'});
    try {
         const country = await Country.findAll({
             where:{ id: id },
            include: {
                 model: Activity,
                 attributes: ['name','difficulty', 'duration', 'season'],
                    through: {
                         attributes: [],
                     }
             }
         })
       res.send(country);
     } catch (error) {
         res.status(404).send({ message: 'Debe ingresar in ID válido'})
     }
}

module.exports = {
    getCountries,
getByCountryId   
}