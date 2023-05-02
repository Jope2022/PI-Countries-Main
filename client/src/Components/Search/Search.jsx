import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import { searchCountries}  from "../redux/actions"
import Results from "../Country/Results";

const Search = () =>{
const dispatch = useDispatch;
const location = useLocation;

const input = location.search.slice(6);

useEffect(() =>{
    dispatch(searchCountries(input));
     }, [dispatch, input]);

     return( 
    <div>
         <Results/>
    </div>
     )
}

export default Search;