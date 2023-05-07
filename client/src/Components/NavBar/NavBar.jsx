import React from 'react';
import { Link } from 'react-router-dom';
import{getCountries} from "../redux/actions";
import { useDispatch } from 'react-redux';
import "./NavBar.css";
//import CreateActivity from "../components/CreateActivity";

const NavBar = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
      console.log("Ingresar crear una actividad")
        dispatch(getCountries());
 }

return (
        <nav>
          <div >
              <div className="navbar-links">
               <Link to="/activitycreate">
                  <button className="button" onClick={handleClick}>Crear un actividad turstica</button>
               </Link>
               <Link to="/about" className="link">
                  <button className="button" onClick={handleClick}>Acerca de Mi</button>
               </Link> 
                </div>
           </div>
         </nav>
    );
};

export default NavBar;


