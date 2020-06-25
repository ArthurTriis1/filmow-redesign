import React from 'react';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';


import './News.css';

function News({ image, title, description, link }) {
  return (
    <div className="newsWrap">
        <div className="imageNews" style={{backgroundImage: `url(${image})`}}>

        </div>
        <div className="newsInfo">
            <h3 className="newsTitle">{title}</h3>
            <p className="newsDetails">{description}</p>
            <div className="newsMoreWrap">
                <a  className="newsMore" href={link}>Continuar lendo</a>
                <ArrowRight className="arrow"/>
                <ArrowRight className="arrow"/>
            </div>
        </div>
    </div>
  )
}

export default News;