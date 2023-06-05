import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './ability.style.css'

library.add(faCircle);

export const Ability = props =>(
  <div className="col-md-4">
    <span className="fa-stack fa-4x">
      <FontAwesomeIcon icon={faCircle} className={`fa fa-circle fa-stack-2x text-${props.color}`}/>
      <FontAwesomeIcon icon={props.principalIcon} className="fa fa-facebook fa-stack-1x fa-inverse"/>
    </span>
    <h4 className="service-heading">{props.titulo}</h4>
  </div>
);