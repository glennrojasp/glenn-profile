import React from 'react';
import { Hero } from '../../components/hero/hero.component';
import { Resume } from '../../components/resume/resume.component';
import { Portafolio } from '../../components/portafolio/portafolio.component';
import { Contact } from '../../components/contact/contact.component'

import header from '../../img/hero-react.jpg';

import './reactpage.styles.scss';

// export const ReactPage = () => (
//     <div className="ReactPage">
//         <Hero imageUrl={header} color="" title="" subTitle=""/>
//         <Portafolio/>
//     </div>
// );


class ReactPage extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                    "title": "Monster Rolodex",
                    "linkUrl": "https://garprojas.github.io/monsters-rolodex/",
                    "description": "React basic search example",
                    "img": require("../../img/portfolio/react-monster-example.jpg"),
                    "id": 1
                }
            ]
        }
    }

    render(){
        return(
            <div className='ReactPage'>
                 <Hero imageUrl={header} color="" title="" subTitle=""/>
                <Portafolio headerTitle="React Examples" examples= {this.state.sections}/>
            </div>
        );
    }
}

export default ReactPage;