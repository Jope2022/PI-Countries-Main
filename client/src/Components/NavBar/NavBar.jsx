import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <SearchBar />
            <div className="navbar-links">
                <Link to="/home">Home</Link>
                <Link to="/create-activity">Create Activity</Link>
                <Link to="/activities">List of Activities</Link>
            </div>
        </nav>
    );
};

export default NavBar;


