import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {postActivities} from "../redux/actions"


export const useForm = ( initialForm, validateForm ) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const [Paises, setPaises] = useState([]);

    const Quitar = (id) =>{
        setPaises(Paises.filter(x => x !== id))
      //      setForm(form.filter(x => x.countryId !== id))     
    }

    const handleChange = (event) => {
        console.log(Paises)    //Actualiza el estado from cambios formulario
        const { name, value } = event.target;
        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleBlur = (event) => {
        console.log(event)    // se encarga actualizar el estado from y error
        handleChange(event);
        setErrors(validateForm(form));
    };

    const handleSubmit = (event) => {    // envia los datos del formulario
        console.log(event)
        event.preventDefault();
        setErrors(validateForm(form));

        if (form.name && form.difficulty && form.duration && form.season && form.countryId && Object.keys(errors).length === 0) {

           dispatch(postActivities({...form, countryId: Paises}));

            alert('Actividad creada');
            setForm(initialForm);
            history.push("/home");
        } else {
            alert("Todos los campos deben ser requeridos");
        }
    };

      const handleSelect = (event) => {  //actualizar el estado from y paises
        console.log(event)
        const { value } = event.target;
        setForm({
            ...form,
            countryId: value
        })
        setPaises([
            ...Paises,
            value
        ])
    }

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect,
        Paises,
        Quitar        
    }
}