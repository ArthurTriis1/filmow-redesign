import React from 'react';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';

import './InfoContainer.css';

function InfoContainer({ children, title }) {
  return (
      <section className="infoContainer">
        <div className="infoWraper">
            <h3>{title}   <ArrowRight className="arrowRight"/> </h3>
            <div className="listInfos">
                { children }
            </div>
        </div>
      </section>
  )
}

export default InfoContainer;