import React from 'react';
import {useSelector } from 'react-redux'
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {    
    const isLoading = useSelector( state => state.loading );
    return (
        <div >
             {
            isLoading ? <Loading/> :
                <div>
                      <SearchBar />
             
                 
                </div>
             }
        </div>
    )
};

export default Home;    
