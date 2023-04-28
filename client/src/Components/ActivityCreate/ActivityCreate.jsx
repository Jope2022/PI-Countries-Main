import React from 'react';
import { useForm } from './useForm';
import { useSelector } from 'react-redux';
import {AUTUMN, SPRING, SUMMER, WINTER } from "../redux/action-types"
import './ActivityCreate.css';
import { useHistory} from 'react-router-dom';

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
        handleSelect
    } = useForm(initialForm, validationsForm)
    const history = useHistory();
    console.log("accion 1")
   return (
        <div >
           <div >
                <div className='form span' >
                   <form className='form' onSubmit={handleSubmit}>
                        <span>Registra una Actividad </span>
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
                            <select
                                name="season"
                                value={form.season}
                                onChange={(event) => handleChange(event)}
                                onBlur={handleBlur}
                            >
                                <option >Temporada: </option>
                                <option  value={WINTER}>Invierno</option>
                                <option  value={SUMMER}>Verano</option>
                                <option  value={AUTUMN}>Otoño</option>
                                <option  value={SPRING}>Primavera</option>
                            </select>
                            {errors.season && <p>{errors.season}</p>}
                        </div>
                        {errors.id && <p>{errors.id}</p>}

                        <div>
                            <select
                                 multiple
                                 onBlur={handleBlur} 
                                 onChange={(event) => handleSelect(event)}>
                                <option>Paises</option>
                                {
                                    countries.map((v) => (
                                        <option  value={v.countryId}>{v.name}</option>))
                                }
                            </select>
                        </div>
                      <div>
                            <button  type="submit">Crear Actividad</button>
                        </div>
                       
                    </form>
                    <div className='botonRegresar'>
                    <button  onClick={() => history.goBack()}>Regresar</button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default ActivityCreate;
