import React from 'react';

const Activity = ({ id, name, duration, season, difficulty}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>Duration: {duration}</h3>
            <h3>Season: {season}</h3>
            <h3>Difficulty: {difficulty}</h3>
            <h3>{id}</h3>
        </div>
    );
};

export default Activity;
