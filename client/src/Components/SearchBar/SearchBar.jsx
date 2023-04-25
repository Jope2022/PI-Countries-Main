import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBar = () => {
   const paisesNombre = useSelector((state) => state.countries);
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  
  useEffect(() => {
    setSearchResults(paisesNombre.filter(pais => pais.name.toLowerCase().includes(name.toLowerCase())));
  }, [name, paisesNombre]);

  return (
    <div >
        <input
          className="form"
          type="search"
          value={name}
          placeholder="Buscar un Pais......"
          onChange={handleChange}
        />
     {/* <button className="button" onClick={handlerDispach}>Buscar</button> */}

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
