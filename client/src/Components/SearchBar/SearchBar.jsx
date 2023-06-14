import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Countries from '../Countries/Countries';
import{getCountries} from "../redux/actions";
import { useDispatch } from 'react-redux';
import { Oval as Loader } from 'react-loader-spinner';

const SearchBar = () => {
  const paisesNombre = useSelector((state) => state.filtered);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Ingresar crear una actividad")
      dispatch(getCountries());
}


  const handleChange = (event) => {
    setName(event.target.value);
  };

  //  const handleResultsPerPageChange = (event) => {
  //    const value = parseInt(event.target.value);
  //    if (!isNaN(value)) {
  //      setResultsPerPage(value);
  //   }
  // };
  useEffect(() => {
    // Simula un tiempo de carga de 2 segundos antes de mostrar los resultados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta el componente
  }, []);

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
 
   console.log(setResultsPerPage)


  return (
    <div className='containerSearchBar'>
      {loading ? ( // Muestra el Loader si loading es true
        <div className="loader-container">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div>
          <div className='containerColumna' >
            <input
              className="inputSearchBar"
              type="search"
              value={name}
              placeholder="Buscar un Pais......"
              onChange={handleChange}
            />
            <Link to="/activitycreate">
              <button className="button" onClick={handleClick}>Crear una actividad turística</button>
            </Link>
            <Link to="/about">
              <button className="button" onClick={handleClick}>Acerca de Mi</button>
            </Link>
            <Link to="/">
              <button className="button" onClick={handleClick}>Salir</button>
            </Link>
          </div>
          <Countries />
          {currentResults.map((paisName) => (
            <div className="submit-button" key={paisName.id}>
              <h3>
                <Link to={`/countries/${paisName.id}`}>{paisName.name}</Link>
              </h3>
              <div className='centrarBandera' >
                <img src={paisName.flag} alt="" />
                <h5>Población: {paisName.population}</h5>
                <h5>Continente: {paisName.continent}</h5>
              </div>
            </div>
          ))}
          <div className="pagination">
            {currentPage > 1 && (
              <button className="buttonPagination" onClick={() => paginate(currentPage - 1)}>
                &lt; {"Anterior"}
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : ""}
                onClick={() => paginate(pageNumber)}
                style={{
                  backgroundColor: pageNumber === currentPage ? "blue" : "white",
                  color: pageNumber === currentPage ? "white" : "black"
                }}
              >
                {pageNumber}
              </button>
            ))}
            {currentPage < totalPages && (
              <button className="buttonPagination" onClick={() => paginate(currentPage + 1)}>
                &gt; {"Siguiente"}
              </button>
            )}

          </div>
          
        </div>
        )}
    </div>
  );
};  

export default SearchBar;
