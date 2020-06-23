import React from 'react';
import './MoviesLists.css';
import { FiChevronRight,FiChevronsRight,FiList } from 'react-icons/fi';

import movies1 from '../../assets/movies1.png';
import movies2 from '../../assets/movies2.png';


const MoviesLists = () => {
    return(
        <section className="List">
            <div className="title">
            <div className="texto">
                <h3>Listas mais populares da semana</h3>
                <FiChevronRight className="arrow"/> 
            </div>
            <button  className="button">
                <FiList  className="iconList"/>
                Criar lista agora</button>
            </div>   

            <div className="containerList">
                <div>
                    <div className="moviesContainer">
                        
                        <img src={movies1} alt="movies1"/>
                        <div className="description">
                            <h3>Festival Cannes 2020</h3>
                            <FiChevronsRight className="arrow"/>
                        </div>
                    </div>  

                    <div className="moviesContainer">
                        <img src={movies2} alt="movies2"/>
                        <div className="description">
                            <h3>séries desconhecidas que merecem muito hype</h3>
                            <FiChevronsRight className="arrow"/>
                        </div> 
                    </div>

                    <div className="moviesContainer">
                        <img src={movies2} alt="movies2"/>
                        <div className="description">
                            <h3>séries desconhecidas que merecem muito hype</h3>
                            <FiChevronsRight className="arrow"/>
                        </div> 
                    </div>   

                    <div className="moviesContainer">
                        <img src={movies2} alt="movies2"/>
                        <div className="description">
                            <h3>séries desconhecidas que merecem muito hype</h3>
                            <FiChevronsRight className="arrow"/>
                        </div> 
                    </div>     

                    <div className="moviesContainer">
                        <img src={movies2} alt="movies2"/>
                        <div className="description">
                            <h3>séries desconhecidas que merecem muito hype</h3>
                            <FiChevronsRight className="arrow"/>
                        </div> 
                    </div>

                    <div className="moviesContainer">
                        <img src={movies2} alt="movies2"/>
                        <div className="description">
                            <h3>séries desconhecidas que merecem muito hype</h3>
                            <FiChevronsRight className="arrow"/>
                        </div> 
                    </div>          
                </div>
            
                 
        </div>
            
        </section>
            
        )
} 

export default MoviesLists;