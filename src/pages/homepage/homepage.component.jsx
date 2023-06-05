import React from 'react';
import { Hero } from '../../components/hero/hero.component';
import { Resume } from '../../components/resume/resume.component';
import { Portafolio } from '../../components/portafolio/portafolio.component';
import { Contact } from '../../components/contact/contact.component'

import header from '../../img/header-bg.jpg';

import './homepage.style.scss';

// const dataPortfolio = {sections :[
//     {
//         "title": "PINVAR S.A.",
//         "linkUrl": "http://www.pinvarsa.com/",
//         "description": "Home Services & Home Appliances Page",
//         "img": require("../../img/portfolio//01-thumbnail.jpg")
//     },
//     {
//         "title": "Olympus",
//         "linkUrl": "http://www.olympuscr.com/",
//         "description": "Fitness services & Gym Page",
//         "img": img3
//     }
// ]};

// export const HomePage = () => (
//     <div className="HomePage">
//         <Hero imageUrl={header} color="" title="Glenn A. Rojas Pineda" subTitle="Welcome To My Portfolio!"/>
//         <Resume/>
//         <Portafolio sections={dataPortfolio}/>
//         <Contact/>
//     </div>
// );


class HomePage extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                    "title": "PINVAR S.A.",
                    "linkUrl": "http://www.pinvarsa.com/",
                    "description": "Home Services & Home Appliances Page",
                    "img": require("../../img/portfolio//01-thumbnail.jpg"),
                    "id": 1
                },
                {
                    "title": "Glenn Personal Coach",
                    "linkUrl": "http://www.olympuscr.com/",
                    "description": "Fitness services & Gym Page",
                    "img": require("../../img/portfolio/03-thumbnail.jpg"),
                    "id": 2
                },
                {
                    "title": "React Monster Rolodex",
                    "linkUrl": "https://garprojas.github.io/monsters-rolodex/",
                    "description": "React Search Page",
                    "img": require("../../img/portfolio/react-monster-example2.jpg"),
                    "id": 2
                },
                {
                    "title": "Crown Clothing App",
                    "linkUrl": "https://hilarious-sprite-695b8d.netlify.app/",
                    "description": "Cloth App and Store",
                    "img": require("../../img/portfolio/crown-clothing-example.jpg"),
                    "id": 2
                }
            ]
        }
    }

    render(){
        return(
            <div className='HomePage'>
                <Hero imageUrl={header} color="" title="Glenn A. Rojas Pineda" subTitle="Welcome To My Portfolio!"/>
                <Resume/>
                <Portafolio headerTitle="Portfolio" examples= {this.state.sections}/>
                <Contact/>
            </div>
        );
    }
}

export default HomePage;
// export default HomePage;