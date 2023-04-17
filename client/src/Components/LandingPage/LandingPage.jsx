import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getCountries } from  "../redux/actions"
import './LandingPage.css';

const LandingPage = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCountries());
    }
   return (
        <div className="container">
            <h1 >Bienvenido a un espacio dedicado a todos los paises del mundo...</h1>
            <h2> Ingresa a la aplicacion</h2>
            <Link to='/home'>  
              <button onClick={handleClick}>Ingresar</button>
            </Link>
        </div>
    ) 
};

export default LandingPage;
