import React from 'react';
import { useSelector } from 'react-redux';
import Loading from "../Loading/Loading";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const CountryDetail = () => {
    const details = useSelector( state => state.details[0]);
    const countries= [];
    return (
        <div>
            {details.length ?
                <div>
                    <div>
                        {countries.map((country) => (
                            <div key={country.id}>
                                <Link to={`/country/${country.id}`}>{country.name}</Link>
                            </div>
                        ))}
        </div> 
                        <img src={details.flag} alt="Not found"/>
                        <h1>{details.name}</h1>
                        <div>
                            <h2>Id: {details.id}</h2>
                            <h2>Capital: {details.capital}</h2>
                            <h2>Continent: {details.continent}</h2>
                            <h2>Sub-Region: {details.sub_region}</h2>
                            <h2>Area: {details.area}</h2>
                            <h2>Population: {details.population}</h2>
                        </div>
                        <div>
                            {
                                details.activities?.map( activity => {
                                    return (
                                        <div>
                                            <h2>Activity</h2>
                                            <div>
                                                <h3>{activity.name}</h3>
                                                <h3>Difficulty: {activity.difficulty}</h3>
                                                <h3>Duration: {activity.duration}</h3>
                                                <h3>Season: {activity.season}</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> : <Loading/>
            }
        </div>
    );
};

export default CountryDetail;
