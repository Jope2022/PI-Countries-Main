import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css";
import{getCountries} from "../redux/actions";
import { useDispatch } from 'react-redux';
import { getActivities } from '../redux/actions';

const NavBar = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCountries());
 }
 const handleClick1 = () => {
    console.log("accon 0")
    dispatch(getActivities());
}
return (
        <nav className="navbar">
            <div className="navbar-links">
              <div>
               <Link to="/create-activity">
               <button className="button" onClick={handleClick}>Crear actividad</button>
               </Link>
               <Link to="/activitylist" className="link">
                 <button className="button" onClick={handleClick1}>Lista de actividades</button>
                </Link>
               <Link to='/countries' className="link">  
                     <button className="button" onClick={handleClick}>Filtrar/Ordenar</button>
               </Link> 
               <Link to="/about" className="link">
               <button className="button" onClick={handleClick}>Creador</button>
               </Link> 
               </div>
            </div>
                <SearchBar />
            </nav>
    );
};

export default NavBar;


