import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getDetail} from "../redux/actions"
import { useParams } from 'react-router-dom';
import "./countryDetail.css"
import { useHistory } from 'react-router-dom';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const {idPais} = useParams();
  const pais = useSelector(state => state.details);
  const history = useHistory();

  useEffect(() =>{ 
  dispatch(getDetail(idPais))
     },[dispatch, idPais]);
           
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
          <p>Poblation: {pais.population}</p>
          <button onClick={() => history.goBack()}>Regresar</button>
     </div>
    </div>
  )
 }
export default CountryDetail;

