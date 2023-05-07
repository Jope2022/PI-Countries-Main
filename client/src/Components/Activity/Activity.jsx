import React from 'react';
import "./Activity.css";

const Activity = ({countryId, name, duration, season, difficulty}) => {
    return (
         <div className='activity-title'>
            <div className='activity-title p'>
                <h2>Actividad Turistica: {name}</h2>
                <h2>Duración: {duration}</h2>
                <h2>Estación: {season}</h2>
                <h2>Dificultad: {difficulty}</h2>
                <h2>CountryId: {countryId}</h2>
            </div>
        </div>
    );
};

export default Activity;

