import React from "react";

import './ejemplo.style.css';

export const Ejemplo = props =>(
        <div className="col-md-6 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href={props.linkUrl} target="_blank">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={props.img} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>{props.title}</h4>
            <p className="text-muted">{props.description}</p>
          </div>
        </div>
);