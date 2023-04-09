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
const { conn, Country } = require('./src/db.js');
const axios = require("axios")

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    await axios.get('https://restcountries.com/v3.1/all')
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
     .catch(err => {
    console.error('Error al establecer conexión con la base de datos:', err);
    });
  });
});
});

