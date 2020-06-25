import React from 'react';
import './QuadroList.css';

function QuadroList({ movies }) {
  let recuo = 100;

  if(movies.length >= 6) {
    recuo = 100
  }else if(movies.length === 5){
    recuo = 90
  }else if(movies.length === 4){
    recuo = 75
  }else if(movies.length === 3){
    recuo = 50
  }

  return (
    <div className="quadroListWrap">
        {
            movies.map((movie, index) => (
                <img src={movie.image} key={index} alt="ImageList" style={{left: `-${index  * recuo}px`, zIndex: `100${5-index}`}}/>
            ))
        }
    </div>
  )
}

export default QuadroList;