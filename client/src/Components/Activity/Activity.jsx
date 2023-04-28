import React from 'react';
import "./Activity.css";

const Activity = ({countryId, name, duration, season, difficulty}) => {
    return (
        <div>
          
            <div className='activity-title'>
        </div>
            <div className='activity'>
                <h2>Nombre Actividad: {name}</h2>
                <h3>Duración: {duration}</h3>
                <h3>Estación: {season}</h3>
                <h3>Dificultad: {difficulty}</h3>
                <h3>País: {countryId}</h3>
            </div>
        </div>
    );
};

export default Activity;

