import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, searchCountries } from '../redux/actions.js';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const paisesNombre = useSelector((state) => state.countries);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([{}]);

  const handleChange = (event) => {
    console.log(event, "accion 1")
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(event, "accion 2")
    event.preventDefault();
    dispatch(searchCountries());
  };

  useEffect(() => {
    console.log(paisesNombre, "accion 3")
    setSearchResults(paisesNombre);
  }, [paisesNombre]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          id="title"
          autoComplete="off"
          value={query}
          placeholder="Buscar Paises..."
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Buscar
        </button>
      </form>
      {searchResults.map((paisName) => (
        <div className="submit-button" key={paisName.name}>
          <h3>
            <Link to={`/countries/${paisName.id}`}>{paisName.name}</Link>
          </h3>
          <img src={paisName.flag} alt="" />
          <div>
            <h5>Continent: {paisName.continents}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
