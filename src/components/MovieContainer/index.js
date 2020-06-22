import React from 'react';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';
import MovieSpan from '../MovieSpan';
import image from '../../assets/moviesImages/102232-dark-staffel3-poster3000.jpg'
import './MovieContainer.css';

function MovieContainer() {
  return (
      <section className="movieContainer">
        <div className="movieWraper">
            <h3>Filmes e séries mais populares no Filmow Io   <ArrowRight className="arrowRight"/> </h3>
            <div className="listMovies">

                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>

            </div>
        </div>
      </section>
  )
}

export default MovieContainer;