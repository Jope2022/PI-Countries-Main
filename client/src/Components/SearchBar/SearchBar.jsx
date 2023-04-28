import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const paisesNombre = useSelector((state) => state.countries);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleResultsPerPageChange = (event) => {
    setResultsPerPage(parseInt(event.target.value));
  };

  useEffect(() => {
    setCurrentPage(1); 
  }, [name]);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = paisesNombre
    .filter(pais => pais.name.toLowerCase().includes(name.toLowerCase()))
    .slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(paisesNombre.length / resultsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        className="form"
        type="search"
        value={name}
        placeholder="Buscar un Pais......"
        onChange={handleChange}
      />
      {currentResults.map((paisName) => (
        <div className="submit-button" key={paisName.id}>
          <h3>
            <Link to={`/countries/${paisName.id}`}>{paisName.name}</Link>
          </h3>
          <img src={paisName.flag} alt="" />
          <div>
            <h5>{paisName.continent}</h5>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
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
  );
};

export default SearchBar;
