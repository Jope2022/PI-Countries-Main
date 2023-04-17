import { FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_DETAIL, 
    ORDER_BY_NAME, ORDER_BY_POPULATION, POST_ACTIVITIES, SEARCH_COUNTRIES, SET_CURRENT_PAGE } from  "./action-types";

const initialState = {
    loading : true,
    countries : [],
    quest : [],
    details : [],
    filtered : [],
    activities : [],
    currentPage: 1,
    countriesPerPage: 10

};

export default function rootReducer( state = initialState, action) {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                loading : false,
                countries : action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload 
            };

        case SEARCH_COUNTRIES:
            return {
                ...state,
                quest : action.payload
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }

        case FILTER_BY_CONTINENT:
            const filterByContinent = action.payload === "ALL" ? state.countries : state.countries.filter (country => country.continent === action.payload)
            return {
                ...state,
                filtered: filterByContinent
            }

        case FILTER_BY_ACTIVITIES:
            const filterByActivities = state.countries.filter (country => country.activities.find(activity => activity.name === action.payload));
            if (action.payload === 'ALL') {
                return {
                    ...state,
                    fitered: state.countries
                }
            }
            else {
                return {
                    ...state,
                    filtered: filterByActivities
                }
            }

        case POST_ACTIVITIES: 
            return {...state}
            
        case ORDER_BY_NAME:
            const orderByName = action.payload === "ASCENDANT" ? state.countries.sort ((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }) : state.countries.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
            return {
                ...state,
                filtered: orderByName
            }
            
            case ORDER_BY_POPULATION:
                const orderByPopulation = action.payload === "MAJOR" ? state.countries.sort ((a, b) => {
                    if (a.population < b.population) return 1;
                    if (a.population > b.population) return -1;
                    return 0;
                }) : state.countries.sort((a, b) => {
                    if (a.population < b.population) return -1;
                    if (a.population > b.population) return 1;
                    return 0;
                })
                return {
                    ...state,
                    filtered: orderByPopulation
                }
        
        default: return state
    }
}