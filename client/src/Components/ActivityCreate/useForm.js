import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {postActivities} from "../redux/actions"


export const useForm = ( initialForm, validateForm ) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
   // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

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
            dispatch(postActivities(form));
            alert('Activity created');
            setForm(initialForm);
            history.push("/home");
        } else {
            return;
        }
    };

    // const handleDelete = (idCountry) => {
    //     let pais =  form.countryId.filter( countryId => countryId !== idCountry)
    //     let paisName = pais.join()
    //     setForm({
    //         ...form,
    //         countryId: paisName
    //             });
    // };

    const handleSelect = (event) => {
        const { value } = event.target;
        setForm({
            ...form,
            countryId: value
        })
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