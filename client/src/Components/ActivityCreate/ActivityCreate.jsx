import React from 'react';
import { useForm } from './useForm';
import NavBar from '../NavBar/NavBar';
import { useSelector } from 'react-redux';
import { AUTUM, SPRING, SUMMER, WINTER } from "../redux/action-types"
import './ActivityCreate.css';


const initialForm = {
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    id: "",
}

const validationsForm = ( form ) => {
    let errors = {};
    if (!form.name) {
        errors.name = "Debes completar el campo 'Nombre'."
    } else if (!form.duration) {
        errors.duration = "Debes completar el campo 'Duración'."
    }else if (!form.difficulty) {
        errors.difficulty = "Debes completar el campo 'Dificultad'."
    }else if (!form.season) {
        errors.season = "Debes completar el campo 'Temporada'."
    }else if (!form.id) {
        errors.id = "Debes completar el campo 'Id'."
    }
    return errors;
}

const ActivityCreate = () => {
    const countries = useSelector( state => state.countries);
    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
       // handleDelete,
        handleSelect
    } = useForm(initialForm, validationsForm)

    return (
        <div>
            <div>
                <NavBar />
            </div>
          <div>
                <div>
                   <form className='form' onSubmit={handleSubmit}>
                        <span> Create an Activity </span>
                        <div >
                            <label>Name: </label>
                            <input
                                type="text"
                                placeholder="Activity name..."
                                value={form.name}
                                name="name"
                                onChange={handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <label>Duration: </label>
                            <input
                                type="text"
                                value={form.duration}
                                name="duration"
                                placeholder="Set duration..."
                                onChange={handleChange}
                            />
                            {errors.duration && <p>{errors.duration}</p>}
                        </div>
                        <div>
                            <label>Difficulty: </label>
                            <input
                                type="range"
                                name="difficulty"
                                min="1"
                                max="5"
                                value={form.difficulty}
                                onChange={(event) => handleChange(event)}
                            />
                            {errors.difficulty && <p className="e"> {errors.difficulty}</p>}
                        </div>
                        <div >
                            <select
                                value={form.season}
                                onChange={(event) => handleChange(event)}
                            >
                                <option >Season: </option>
                                <option  value={WINTER}>Winter</option>
                                <option  value={SUMMER}>Summer</option>
                                <option  value={AUTUM}>Autum</option>
                                <option  value={SPRING}>Spring</option>
                            </select>
                            {errors.season && <p>{errors.season}</p>}
                        </div>
                        {errors.id && <p>{errors.id}</p>}

                        <div>
                            <select onChange={(event) => handleSelect(event)}>
                                <option>Countries </option>
                                {
                                    countries.map((v) => (
                                        <option  value={v.id}>{v.name}</option>))
                                }
                            </select>
                        </div>
                      <div>
                            <button  type="submit">Create Activity</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ActivityCreate;
