import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByActivity, filterByContinent, getActivities, getCountries, orderByName, orderByPopulation } from '../Actions';
import { ALL, ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_EUROPE,
     ALL_OF_N_AMERICA, ALL_OF_OCEANIA, ALL_OF_S_AMERICA, ASCENDANT, DESCENDANT, 
     MAJOR_POPULATION, MINOR_POPULATION } from '../../Const/Const';
import Country from '../Country/Country';
import Paginated from '../Paginated/Paginated';

const Countries = () => {
    const countries = useSelector( state => state.countries );
    const activities = useSelector( state => state.activities );
    const dispatch = useDispatch();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ order, setOrder ] = useState("");
    const countriesPerPage = 10;
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountry = countries.slice(firstCountry, lastCountry);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const reloadButton = (event) => {
        event.preventDefault();
        dispatch(getCountries());
    }
    
    const handleFilterContinent = (event) => {
        dispatch(filterByContinent(event.target.value));
        setCurrentPage(1);
    }
    
    const handleFilterActivity = (event) => {
        dispatch(filterByActivity(event.target.value));
        setCurrentPage(1);
      }
    
    const handleSort = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`);
    }
    
    const handleSort2 = (event) => {
        event.preventDefault();
        dispatch(orderByPopulation(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`);
      }
    
    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);
    
    return (
        <div className="cardsContainer">
            <div className="filterContainer">
            <button id='b1' className='filterAndOrder' onClick={(event) => reloadButton(event)}>Reload</button>
                <select className='filterAndOrder' onChange={(event) => handleSort(event)}>
                    <option>Filter by Alphabetical Order</option>
                    <option value={ASCENDANT}> A-Z </option>
                    <option value={DESCENDANT}> Z-A </option>
                </select>
        
                <select className='filterAndOrder' onChange={(event) => handleSort2(event)}>
                    <option>Filter by Population</option>
                    <option value={MAJOR_POPULATION}>Major Population</option>
                    <option value={MINOR_POPULATION}>Minor Population</option>
                </select>
        
                <select className='filterAndOrder' onChange={(event) => handleFilterActivity(event)}>
                    <option value="todos"> Activities </option>
                    {
                        activities.map((activity) => (<option value={activity.name}>{activity.name}</option>))
                    }
                </select>
        
                <select className='filterAndOrder' onChange={(event) => handleFilterContinent(event)}>
                    <option value="continent">Continents</option>
                    <option value={ALL}>Todos</option>
                    <option value={ALL_OF_AFRICA}>Africa</option>
                    <option value={ALL_OF_ANTARCTICA}>Antarctica</option>
                    <option value={ALL_OF_N_AMERICA}>North America</option>
                    <option value={ALL_OF_S_AMERICA}>South America</option>
                    <option value={ALL_OF_ASIA}>Asia</option>
                    <option value={ALL_OF_EUROPE}>Europe</option>
                    <option value={ALL_OF_OCEANIA}>Oceania</option>
                </select>
            </div>
    
            <Paginated
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginated={paginated}
            />
    
            <div className='cardsBox'>
                {
                    currentCountry?.map((country) => {
                        return (
                            <div key={country.id}>
                                <Link to={"/home/" + country.id}>
                                    <Country
                                        name={country.name}
                                        flag={country.flag}
                                        continent={country.continent}
                                        capital={country.capital}
                                        population={country.population}
                                    />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Countries;