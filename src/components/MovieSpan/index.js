import React from 'react';

import { AiFillStar } from 'react-icons/ai';

 import './MovieSpan.css';



function MovieSpan({ title, stars, image, countComents }) {


  return (
        <div className="wrapMovieContent">
            <div className="imageWrap">
                <button className="btAddList">+</button>
                <img src={image} alt="MovieImage"/>
            </div>

            <div className="starWrap">
                <AiFillStar className="movieStar"/>
                <h5>{stars}</h5>
            </div>

            <div className="titleWrap">
                <div>{title}</div>
            </div>

            <button className="btAddToList">+ adicionar na lista</button>
            <p>{countComents} comentarios</p>
        </div>
  )
}
export default MovieSpan;