const express = require('express');
const { Country, Activity } = require ('../db');
const {Op} = require('sequelize');
const { getDbData } = require('../controllers/api.controllers');

async function getCountries (req, res) {
     const {name} = req.query;
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
         }); 
         list.length ? res.send(list.map(country => country)) :
        res.status(404).send({message: "El país no se encuentra"});
     }catch(error) {
         console.log(error);
     }
 }

 module.exports = {
    getCountries,
}