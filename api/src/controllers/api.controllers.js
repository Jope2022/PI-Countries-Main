const { Country, Activity } = require ('../db');
const axios = require('axios');

async function getDbData (req, res) {
    try {  
        let apiCall = await axios.get('https://restcountries.com/v3/all');
        apiCall = await apiCall.data.map (async (country) => {
          return await Country.findOrCreate({
                where: {
                    id: country.cca3,
                    name: country.name.common,
                },
                defaults: {
                    flag: country.flags[0],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : "Not found" ,
                    subregion: country.subregion ? country.subregion : "Not found",
                    area: country.area,
                    population: country.population
                }
            });
        })
        const apiData = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                    through: {
                        attributes: [],
                    }
            }
        })
        return apiData;
    } catch (error) {
        return console.log(error);
    }
}

module.exports = {
    getDbData,
}