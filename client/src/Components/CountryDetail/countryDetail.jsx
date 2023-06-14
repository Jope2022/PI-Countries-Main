import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getDetail, getActivities} from "../redux/actions"
import { useParams } from 'react-router-dom';
import "./countryDetail.css"
import { useHistory } from 'react-router-dom';
import ActivityList from "../ActivityList/ActivityList.jsx";

const CountryDetail = () => {
  const dispatch = useDispatch();
  const {idPais} = useParams();
  const pais = useSelector(state => state.details);
  const history = useHistory();
  const actividades = useSelector(state => state.activities);

  useEffect(() =>{ 
  dispatch(getDetail(idPais))
  dispatch(getActivities())
     },[dispatch, idPais]);

     const activitiesForCountry = actividades.filter(act => act.countryId === pais.id);
     console.log(activitiesForCountry)

     console.log(activitiesForCountry)           
     console.log(pais.activities)
  return (
    <div>
         <div className="submit-button1" key={pais.name}>
        <div className='containerDetail'> 
         <p>{pais.name}</p>
         <img className='centrarBandera' src={pais.flag ? pais.flag: "no hay banderas"} alt="" />
          <p>Id: {pais.id}</p>
          <p>Capital: {pais.capital}</p>
          <p>Continent: {pais.continent}</p>
          <p>SubRegion: {pais.subregion}</p>
          <p>Area: {pais.area}</p>
          <p>Poblation: {pais.population}</p>
          {pais.activities.length > 0 && <ActivityList activities={pais.activities} />}
          <button className='botonDetail' onClick={() => history.goBack()}>Regresar</button>
      </div>
      </div>

    </div>
  )
 }
export default CountryDetail;

