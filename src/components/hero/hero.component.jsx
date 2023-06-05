import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

import './hero.style.css'

export const Hero = props =>(
    <header className="masthead" style={{backgroundImage: `url(${props.imageUrl})`}} >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{props.subTitle}</div>
          <div className="intro-heading">{props.title}</div>
          <div className="quick-links">
            <ul>
              <li><a href="https://www.linkedin.com/in/glenn-rojas-pineda-99287531/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa fa-facebook"/></a></li>
              <li><a href="https://github.com/glennrojasp" target="_blank"><FontAwesomeIcon icon={faGithub} className="fa fa-facebook"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
);