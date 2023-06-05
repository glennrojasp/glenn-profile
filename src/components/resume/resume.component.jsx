import React from "react";
import { Ability } from "../ability/ability.component";

import { faReact, faJava, faJs, faAmazon, faBootstrap, faNode, faSass, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGlasses } from "@fortawesome/free-solid-svg-icons";

import './resume.style.css'

export const Resume = () =>(
    <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About<br/><br/></h2>
          <h3 className="section-subheading text-muted">
            I am a Front End Developer with knowledge of BackEnd. With 6 years of experience working in web development. 
            <br/><br/>Accomplished in the software life-cycle, with strong soft skill communication, quick learner and a good team player.
            <br/><br/>Also, I finished Hangar’s AEM TDP program (AEM Business Practitioner and AEM Front End Developer certificates).
            <br/><br/>I have basic knowledge of UX design, experience in Adobe CC, and basic experience in Graphic design.
          </h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Skills<br/><br/></h2>
        </div>
        <Ability titulo="React Developer" principalIcon={faReact} color="info"/>
        <Ability titulo="JavaScript Developer" principalIcon={faJs} color="warning"/>
        <Ability titulo="Java Developer" principalIcon={faJava} color="danger"/>
        <Ability titulo="AEM Front Developer" principalIcon={faAmazon} color="warning"/>
      </div>
      <div className="row text-center">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase"><br/><br/>Technologies <br/><br/></h2>
        </div>
        <Ability titulo="Bootstrap" principalIcon={faBootstrap} color="purple"/>
        <Ability titulo="Sass" principalIcon={faSass} color="purple"/>
        <Ability titulo="Git" principalIcon={faGitAlt} color="danger"/>
        <Ability titulo="Node JS" principalIcon={faNode} color="success"/>
        <Ability titulo="MongoDB" principalIcon={faDatabase} color="success"/>
        <Ability titulo="JHipster" principalIcon={faGlasses} color="info"/>
      </div>
    </div>
  </section>
);