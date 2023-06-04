import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";


export const getCountries = () => {
    return async (dispatch) => {
        try {
            const requestCountries = await axios.get(`http://localhost:3001/countries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: requestCountries.data
            });
        } catch (error) {
            alert('Los países de la api no funcionan');
            console.log(error);
        }
    }
}
export const searchCountries = (idPais) => {
    return async (dispatch) => {
        try {
            const search = await axios.get(`http://localhost:3001/countries?name=${idPais}`)
             return dispatch({
                type: SEARCH_COUNTRIES,
                payload: search.data
            });
         
        } catch (error) {
            alert('El pais no se encuentra')
            console.log(error);
        }
    }
}

export const getDetail = (id) => {
    return async function(dispatch){
        try {
            let detail = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: detail.data
            })
        } catch (error) {
            alert('Algo salió mal con la solicitud detallada')
            console.log(error);
        }
    }
}

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const activities = await axios.get(`http://localhost:3001/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: activities.data
            })
        } catch (error) {
            alert('Algo salió mal con la solicitud de actividad')
            console.log(error)
        }
    }
}
export const postActivities = (payload) => {
    return async (dispatch) => {
        await axios.post('http://localhost:3001/activities', payload);
        return dispatch({
            type: POST_ACTIVITIES,
        })
    }
}
export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}
export const filterByActivity = (payload) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}
export const orderByName = (payload) => {
   return {
        type: ORDER_BY_NAME,
        payload
    }
}
export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
}
}