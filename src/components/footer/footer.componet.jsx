import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.style.css';

export const Footer = props =>(
 <footer>
 <div class="container">
   <div class="row">
     <div class="col-md-4">
       <span class="copyright"></span>
     </div>
     <div class="col-md-4">
       <ul class="list-inline social-buttons">
         <li class="list-inline-item">
           <a href="#">
             <FontAwesomeIcon icon={faLinkedin} className="fa fa-linkedin"/>
           </a>
         </li>
       </ul>
     </div>
     {/* <div class="col-md-4">
       <ul class="list-inline quicklinks">
         <li class="list-inline-item">
           <a href="#">Privacy Policy</a>
         </li>
         <li class="list-inline-item">
           <a href="#">Terms of Use</a>
         </li>
       </ul>
     </div> */}
   </div>
 </div>
</footer>
);