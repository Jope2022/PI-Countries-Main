import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { searchCountries } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { dispatch } from 'react';

const CountryPaisNombre = () => {
  const dispatch = useDispatch();
  const paisesNombre = useSelector(state => state.countries)
  const {idPais} = useParams();

const handleSubmit = (query) => {
    dispatch(searchCountries(query));
   }

   useEffect(() =>{ 
    dispatch(getDetail(idPais))
},[dispatch, idPais]);
             

 return (
  <div>
      <SearchBar onSearch={handleSubmit} />
      {paisesNombre.map(pais => (
        <div key={pais.name} onSubmit={event => handleSubmit(event)}>
          <p>{pais.name}</p>
          <img src={pais.flag ? pais.flag : "no hay banderas"} alt="" />
          <p>id: {pais.id}</p>
          <p>Capital: {pais.capital}</p>
          <p>Continent: {pais.continents}</p>
          <p>SubRegion: {pais.subregion}</p>
          <p>Area: {pais.area}</p>
          <p>Poblation:{pais.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryPaisNombre;

