import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css";
import{getCountries} from "../redux/actions";
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCountries());
 }
return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/home">Inicio</Link>
                <Link to="/create-activity">Crear actividad</Link>
                <Link to="/activities">Lista de actividades</Link>
                <Link to='/countries' className="link">  
                     <button className="button" onClick={handleClick}>Filtrar/Ordenar</button>
                </Link> 
                <Link to='/paginatedetalle' className="link">  
                     <button className="button" onClick={handleClick}>Paginado</button>
                </Link> 
             </div>
                <SearchBar />
            </nav>
    );
};

export default NavBar;


