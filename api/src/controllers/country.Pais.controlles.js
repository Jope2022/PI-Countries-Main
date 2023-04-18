const express = require('express');
const { Country, Activity } = require ('../db');

async function getByCountryId (req, res) {
     const { idPais } = req.params;
     if (!idPais) return res.status(404).send({message: 'Should enter an ID'});
    try {
         const country = await Country.findOne({
             where:{ id: idPais },
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
         res.status(404).send({ message: 'Debe ingresar una identificación válida'})
     }
}

module.exports = {
getByCountryId,
}