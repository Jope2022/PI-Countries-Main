import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, filterByContinent, getActivities,getCountries, orderByName,
         orderByPopulation } from '../redux/actions';
import { ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_EUROPE, ALL_OF_N_AMERICA, 
         ALL_OF_OCEANIA, ALL_OF_S_AMERICA, ASCENDANT, DESCENDANT, MAJOR_POPULATION,
          MINOR_POPULATION } from '../redux/action-types';
import "./Countries.css"

const Countries = () => {
    const countries = useSelector( state => state.countries );
    const activities = useSelector( state => state.activities );
    const dispatch = useDispatch();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ order, setOrder ] = useState("");
        
    const handleFilterContinent = (event) => {
        dispatch(filterByContinent(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`);
    }
    
    const handleFilterActivity = (event) => {
        dispatch(filterByActivity(event.target.value));
        setCurrentPage(1);
      }
    
    const handleSort = (event) => {
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`);
    }

    const handleSort2 = (event) => { 
        dispatch(orderByPopulation(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`);
      }
    
    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);
    
    console.log("currentPage: ", currentPage);
    console.log("order: ", order);
    console.log(countries)
    
    return (
           <div className="cardsContainer">
              <div>
                <select className='filterContainer input' onChange={(event) => handleSort(event)}>
                    <option>Ordenar Alfabeticamente:</option>
                    <option value={ASCENDANT}> A-Z </option>
                    <option value={DESCENDANT}> Z-A </option>
                </select>
                <select className='filterContainer input' onChange={(event) => handleSort2(event)}>
                    <option>Ordenar por Población:</option>
                    <option value={MAJOR_POPULATION}>Mayor Poblacion</option>
                    <option value={MINOR_POPULATION}>Menor Poblacion</option>
                </select>
                <select className='filterContainer input'
                 onChange={(event) => handleFilterActivity(event)}>
                    <option value="ALL"> Filtrar por Actividades: </option>
                    {
                        activities.map((activity) => (<option value={activity.name}>{activity.name}</option>))
                    }
                </select>
                <select className='filterContainer input' onChange={(event) => handleFilterContinent(event)}>
                    <option value="ALL">Filtrar por Continente:</option>
                    <option value={ALL_OF_AFRICA}>Africa</option>
                    <option value={ALL_OF_ANTARCTICA}>Antártida</option>
                    <option value={ALL_OF_N_AMERICA}>America Norte</option>
                    <option value={ALL_OF_S_AMERICA}>America Sur</option>
                    <option value={ALL_OF_ASIA}>Asia</option>
                    <option value={ALL_OF_EUROPE}>Europa</option>
                    <option value={ALL_OF_OCEANIA}>Oceania</option>
                </select>
           </div>
      </div>
    
    
    );
};
export default Countries;