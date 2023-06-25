import React from 'react';
import { useSelector } from 'react-redux';
import {AUTUMN, SPRING, SUMMER, WINTER } from "../redux/action-types"
import { useForm } from './useForm';
import './ActivityCreate.css';
import { useHistory} from 'react-router-dom';
import imagenTuristica from "../../Img/imagenTuristica.jpg"
import imagenTuristica1 from "../../Img/imagenTuristica1.jpg"

const initialForm = {
    name: "",
    difficulty: "",
    duration: "HH:mm:ss",
    season: "",
    countryId: "",
}

const validationsForm = ( form ) => {
    let errors = {};
    if (!form.name) {
        errors.name = "Debes completar el campo 'Nombre'."
    }else if  (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(form.name))  {
            errors.name = "El campo 'Nombre' solo puede contener letras.";
    }else if (!form.difficulty) {
        errors.difficulty = "Debes completar el campo 'Dificultad'."
    }else if (!form.duration) {
        errors.duration = "Debes completar el campo 'Duración'."
    }else if (!form.season) {
        errors.season = "Debes completar el campo 'Temporada'."
    }else if (!form.countryId) {
        errors.countyId = "Debes completar el campo 'Id'."
    }
    return errors;
}

const ActivityCreate = () => {
    const countries = useSelector( state => state.countries);
      const {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        handleSelect,
        Paises,
        Quitar
    } = useForm(initialForm, validationsForm)

    const history = useHistory();

   return (
    
        <div className='containerActivityCreate'>
         <div >
             <img className='imagenTuristica' src={imagenTuristica} alt="" />
             <img className='imagenTuristica1' src={imagenTuristica1} alt="" />
         
            <div  className='form' >
                <div >
                  <form  onSubmit={handleSubmit}>
                        <span className='span'>Registra una Actividad Turística </span>
                        <div >
                            <label>Nombre: </label>
                            <input
                                type="text"
                                placeholder="Nombre de la actividad..."
                                value={form.name}
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <label>Duración: </label>
                            <input
                                step={1}
                                type="time"
                                value={form.duration}
                                name="duration"
                                placeholder="Establecer duración..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.duration && <p>{errors.duration}</p>}
                        </div>
                        <div>
                            <label>Dificultad: </label>
                            <input
                                type="range"
                                name="difficulty"
                                min="1"
                                max="5"
                                value={form.difficulty}
                                onChange={(event) => handleChange(event)}
                                onBlur={handleBlur}
                            />
                            {errors.difficulty && <p className="e"> {errors.difficulty}</p>}
                        </div>
                        <div >
                           <label>Temporadas: </label>
                            <select
                                name="season"
                                value={form.season}
                                onChange={(event) => handleChange(event)}
                                onBlur={handleBlur}
                            >
                                <option  value={WINTER}>Invierno</option>
                                <option  value={SUMMER}>Verano</option>
                                <option  value={AUTUMN}>Otoño</option>
                                <option  value={SPRING}>Primavera</option>
                            </select>
                            {errors.season && <p>{errors.season}</p>}
                        </div>
                        {errors.id && <p>{errors.id}</p>}
                        <div>
                            <label>Paises: </label>
                            <select
                                 multiple
                                 onBlur={handleBlur} 
                                 onChange={(event) => handleSelect(event)}>
                               {
                                    countries.map((v) => (
                                        <option  value={v.id}>{v.name}</option>))
                                }
                            </select>
                        </div>
                    <div>
                            <button  type="submit">Crear Actividad</button>
                        </div>
                       
                    </form>
                               <div className='botoncierreX' > 
                                 {Paises.map(pais =>{ 
                                    return( <div >{pais} <button className='botoncierreX' onClick={()=>{Quitar(pais)} }>X</button>  </div> )
                                 })}
                                 </div>
                              
                    <div>
                    <button className='botomRegresar' onClick={() => history.goBack()}>Regresar</button>
                    </div>
                 </div>
            </div>
      
            </div>       
        </div>        
    );
};

export default ActivityCreate;
