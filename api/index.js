//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const express = require('express');
const axios = require('axios');
const { Country } = require('./src/db.js');

/// Configuración de Sequelize y conexión a la base de datos
conn.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
    // Sincronización de los modelos con la base de datos
    return conn.sync({ force: true });
  })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');

    // Petición a la API de países para obtener los datos
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        // Guardar los datos en la base de datos
        const countriesData = response.data;
        const dataApi = countriesData.map(cont => {
          return {
            id: cont.cca3,
            name: cont.name.common,
            imageFlag: cont.flag[0],
            continent: cont.continents[0],
            capital: cont.capital != undefined ? cont.capital[0] : "No se encontro la capital",
            subregion: cont.subregion,
            area: cont.area,
            population: cont.population
          }
        })
        Country.bulkCreate(dataApi)
          .then(() => {
            console.log('Datos de países guardados en la base de datos');
          })
          .catch(err => {
            console.error('Error al guardar datos en la base de datos:', err);
          });
      })
      .catch(err => {
        console.error('Error al obtener datos de la API:', err);
      });
  })
  .catch(err => {
    console.error('Error al establecer conexión con la base de datos:', err);
  });


   server.listen(3002, async() =>{
     console.log("Server on port 3002")
  });
