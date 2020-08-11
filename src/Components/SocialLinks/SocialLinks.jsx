import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, 
    faInstagramSquare, 
    faTwitterSquare, 
    faLinkedin, 
    faYoutube } from '@fortawesome/free-brands-svg-icons'

import style from './style.module.css';


const SocialLinks = () => {
    
    
    return (
        <div className={ style.wrap }>
             <FontAwesomeIcon icon={ faFacebookSquare }/>
             <FontAwesomeIcon icon={ faInstagramSquare }/>
             <FontAwesomeIcon icon={ faTwitterSquare }/>
             <FontAwesomeIcon icon={ faLinkedin }/>
             <FontAwesomeIcon icon={ faYoutube }/>

        </div>
    );
}

export default SocialLinks;