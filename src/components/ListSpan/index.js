import React from 'react';
import './MoviesLists.css';
import { FiChevronsRight } from 'react-icons/fi';
import QuadroList from '../QuadroList';

const MoviesLists = ({ title, image, description, movies}) => {
    return(
        <div className="listWrap">
            <QuadroList movies={movies}/>
            <div className="listDescription">{description.substr(0, 45) + "..."}
                <FiChevronsRight className="arrowRight"/> 
            </div>
        </div>           
    )
} 

export default MoviesLists;