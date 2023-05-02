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

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleBlur = (event) => {
        handleChange(event);
        setErrors(validateForm(form));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            Paises.forEach(pais=>{
                dispatch(postActivities({...form, countryId: pais}));
    
            })
            alert('Activity created');
            setForm(initialForm);
            history.push("/home");
        } else {
            return;
        }
    };

      const handleSelect = (event) => {
        const { value } = event.target;
        console.log(value)
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
        handleSelect
    }
}