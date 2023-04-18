import React, {useState, useEffect  } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { searchCountries  } from "../redux/actions.js";
import './SearchBar.css';
import { Link } from 'react-router-dom';


const SearchBar = () => {
    const dispatch = useDispatch();
    const paisesNombre = useSelector(state => state.countries.slice())
    const [input, setInput] = useState('');

     const handleChange = (event) => {
         setInput(event.target.value)
     }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchCountries (input));
        setInput('');
    }
       
    useEffect(() =>{
        dispatch(searchCountries(input));
    }, [dispatch, input]);
             
    return ( 
        <div>
            <form className='from' onSubmit={ event => handleSubmit(event)}>
                <input 
                    type="text"
                    id="title"
                    autoComplete='off'
                    value={input}
                    placeholder= "Buscar Paises..."
                    onChange={event=>handleChange(event)}
                />
                <button type="submit">Buscar</button>
            </form>
            
            {paisesNombre.map(paisName =>
                   <div className="submit-button" key={paisName.name}>
                    <h3> <Link to={`/countries/${paisName.id}`}>{paisName.name}</Link> </h3>       
                    
                   <img src={paisName.flag} alt="" />
                   <div>
                   <h5>Continent: {paisName.continent}</h5>
                   </div>
                </div>
            )}
        </div>
    )
};

export default SearchBar;