import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from "../redux/actions";


const Country = () => {
     const dispatch = useDispatch();
        const paises = useSelector(state => state.countries)

    useEffect(() => {
      dispatch(getCountries())
      }, [dispatch]);
  
    return (paises.map(pais=>( 
        <div>
            <h3>{pais.name}</h3>
            <img src={pais.flag} alt="" />
            <div>
                <h5>Capital: {pais.capital}</h5>
                <h5>Continent: {pais.continent}</h5>
                <h5>Population: {pais.poblation}</h5>

            </div>
        </div>))
       
    );
};

export default Country;



