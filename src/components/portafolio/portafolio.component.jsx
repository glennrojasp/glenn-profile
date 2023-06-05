import React from "react";

import { Ejemplo } from "../ejemplo/ejemplo.component";

import './portafolio.style.css';

import img1 from '../../img/portfolio/01-thumbnail.jpg';
import img2 from '../../img/portfolio/02-thumbnail.jpg';
import img3 from '../../img/portfolio/03-thumbnail.jpg';

export const Portafolio = props =>(
    <section classNameName="bg-light portfolio" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{props.headerTitle}<br/><br/></h2>
        </div>
      </div>
      <div className="row">
        {props.examples.map(({id, ...otherProps}) => (
          <Ejemplo key={id} title={otherProps.title} description={otherProps.description} img={otherProps.img} linkUrl={otherProps.linkUrl}/>
        ))}
      </div>
    </div>
  </section>
);