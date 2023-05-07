import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from "../redux/actions";
import "./Country.css"
import Countries from '../Countries/Countries';

const Country = () => {
    const dispatch = useDispatch();
    const paises = useSelector(state => state.filtered)
   
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
            <div >
              <Countries/>   
                { paises.map(pais => (
                <div key={pais.id} className='submit-button'>
                  <h3> {pais.name}</h3>
                  <img  src={pais.flag} alt="" />
                  <div>
                    <p>Id: {pais.id}</p>
                    <p>Capital: {pais.capital}</p>
                    <p>Continents: {pais.continent}</p>
                    <p>SubRegion: {pais.subregion}</p>
                    <p>Area: {pais.area}</p>
                    <p>Population: {pais.population}</p>
                  </div>
              </div>
              ))}
            </div>
          )
         }

export default Country;



