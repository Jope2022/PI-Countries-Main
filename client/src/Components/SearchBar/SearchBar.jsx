import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Countries from '../Countries/Countries';
import lupa from "../../Img/Lupa.jpg";
import NavBar from '../NavBar/NavBar';

const SearchBar = () => {
  const paisesNombre = useSelector((state) => state.filtered);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const handleChange = (event) => {
    setName(event.target.value);
  };

   const handleResultsPerPageChange = (event) => {
     const value = parseInt(event.target.value);
     if (!isNaN(value)) {
       setResultsPerPage(value);
    }
  };
  
  useEffect(() => {
    setCurrentPage(1); 
  }, [name]);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  console.log(paisesNombre, "accion Searchbar")
  const currentResults = paisesNombre
    .filter(pais => pais.name.toLowerCase().includes(name.toLowerCase()))
    .slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(paisesNombre.length / resultsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
  
    <div className='containerSearchBar' >
      <div >
      <NavBar/> 
        <input
        className="inputSearchBar"
        type="search"
        value={name}
        placeholder="Buscar un Pais......"
        onChange={handleChange}
      />
      <img className='imagenLupa' src={lupa} alt="Lupa" />
        <Countries/>
      {currentResults.map((paisName) => (
        <div className="submit-button" key={paisName.id}>
          <h3>
            <Link to={`/countries/${paisName.id}`}>{paisName.name}</Link>
          </h3>
          <img src={paisName.flag} alt="" />
          <div>
          <h5>Población: {paisName.population}</h5>
            <h5>Continente: {paisName.continent}</h5>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
            onClick={() => paginate(pageNumber)}
          >
          {pageNumber}
        </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
