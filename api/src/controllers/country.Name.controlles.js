const axios = require('axios');

async function getApiData (req, res) {
    const {name} = req.query;
    //const name2 = name[0].toUpperCase();-------------------------------------------
    //console.log(name2)
    try {  
        let apiCall = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                      
        res.status(200).json(apiCall)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getApiData,
}