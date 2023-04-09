const express = require('express');
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
     const { idPais } = req.params;
     if (!idPais) return res.status(404).send({message: 'Should enter an ID'});
    try {
         const country = await Country.findAll({
             where:{ id: idPais },
            include: {
                 model: Activity,
                 attributes: ['id','name','dificulty', 'duration', 'season'],
                    through: {
                         attributes: [],
                     }
             }
         })
       res.send(country);
     } catch (error) {
         res.status(404).send({ message: 'Should enter a valid ID'})
     }
}
//-------------------------funcion name-------------------------
 
  const getCountriesByName = async (req, res) => {
    const name = req.query.name.toLowerCase(); // Convertir el nombre a minúsculas
    console.log(name)
    const countries = await Country.find({ name: { $regex: name, $options: 'i' } }); // Buscar países que coincidan con el nombre
    if (countries.length === 0) { // Si no se encontraron países, devolver un mensaje adecuado
      return res.status(404).json({ message: `No se encontraron países con el nombre '${name}'` });
    }
    res.json(countries); // Devolver los países encontrados
  };
  

module.exports = {
    getCountries,
getByCountryId,
getCountriesByName   
}