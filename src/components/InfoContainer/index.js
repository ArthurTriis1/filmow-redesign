import React from 'react';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';

import './InfoContainer.css';
import { FiList } from 'react-icons/fi';

function InfoContainer({ children, title, createListShow}) {
  return (
      <section className="infoContainer">
        <div className="infoWraper">
            <div className="titleWrapper">
              <h3>{title}   <ArrowRight className="arrowRight"/> </h3>
              { createListShow && <button className="btCreateList"><FiList/> criar lista agora</button> }
            </div>
            <div className="listInfos">
                { children }
            </div>
        </div>
      </section>
  )
}

export default InfoContainer;