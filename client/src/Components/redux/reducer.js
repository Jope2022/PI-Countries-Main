import { FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_DETAIL, 
    ORDER_BY_NAME, ORDER_BY_POPULATION, POST_ACTIVITIES, SEARCH_COUNTRIES, 
    SET_CURRENT_PAGE, MAJOR_POPULATION } from  "./action-types";

const initialState = {
    loading : true,
    countries : [],
    quest : [],
    details : {activities:[]},
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
                countries : action.payload,
                filtered: action.payload
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
                activities: action.payload.filter((obj, index, self) => {
                    return index === self.findIndex((t) => (
                      t.name === obj.name
                    ));
                  })
            }

        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }

        case FILTER_BY_CONTINENT:
            const filterByContinent = action.payload === "ALL" ? state.countries : 
            state.countries.filter (country => country.continent === action.payload)
            return {
                ...state,
                filtered: filterByContinent
            } 

        case FILTER_BY_ACTIVITIES:
             const filterByActivities = state.countries.filter (filtered => filtered.activities.some(
                activity => activity.name === action.payload))
                .map(filtered => ({...filtered, name: filtered.name}));
            if (action.payload === 'ALL') {
                return {
                    ...state,
                    filtered: state.countries
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
             return {
                ...state,
                filtered: action.payload === "ASCENDANT" ? [...state.countries].sort ((a, b) => {
                    return a.name.localeCompare(b.name);
                 }) : [...state.countries].sort((a, b) => {
                    return b.name.localeCompare(a.name);
                 })
            }
        
            case ORDER_BY_POPULATION:
                    const sortedCountries = [...state.countries].sort((a, b) => {
                        if (action.payload === MAJOR_POPULATION) {
                            return b.population - a.population;
                         } else {
                             return a.population - b.population;
                         }
                    });
                    return {
                        ...state,
                        filtered: [...sortedCountries]
                    }
                default: 
                    return state;
     }
}

