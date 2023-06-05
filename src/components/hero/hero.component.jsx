import React from "react";

import './hero.style.css'

export const Hero = props =>(
    <header className="masthead" style={{backgroundImage: `url(${props.imageUrl})`}} >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{props.subTitle}</div>
          <div className="intro-heading">{props.title}</div>
          <div className="intro-heading text-uppercase"></div>
        </div>
      </div>
    </header>
);