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
            <h1 className="title">Bienvenido a un espacio dedicado a todos los paises del mundo...</h1>
           
            <h2>. Buscar Países</h2>
            <h2>. Ordenar Países por Población y Alfabeto</h2>
            <h2>. Filtrar Países por Continente y Actividad Turistica</h2>
            <h2>. Crear una Actividad Turistica</h2>
            <h2 className="subtitle"> Ingresa a la App</h2>
            <Link to='/home' className="link">  
               <button className="button" onClick={handleClick}>Ingresar</button>
            </Link>
        </div>
    ) 
};


export default LandingPage;
