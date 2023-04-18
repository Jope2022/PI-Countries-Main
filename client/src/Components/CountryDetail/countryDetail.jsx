import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getDetail} from "../redux/actions"
import { useParams } from 'react-router-dom';
import "./countryDetail.css"


const CountryDetail = () => {
  const dispatch = useDispatch();
  const {idPais} = useParams();
  const pais = useSelector(state => state.details);

  useEffect(() =>{ 
  dispatch(getDetail(idPais))
     }, [idPais]);
           
  return (
    <div>
         <div className="submit-button1" key={pais.name}>
         <p>{pais.name}</p>
         <img src={pais.flag ? pais.flag: "no hay banderas"} alt="" />
          <p>Id: {pais.id}</p>
          <p>Capital: {pais.capital}</p>
          <p>Continent: {pais.continent}</p>
          <p>SubRegion: {pais.subregion}</p>
          <p>Area: {pais.area}</p>
          <p>Poblation: {pais.poblation}</p>
          </div>
          </div>
  )
 }
export default CountryDetail;

