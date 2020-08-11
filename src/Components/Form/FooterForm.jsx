import React from 'react';

import Inputs from './Inputs.jsx'
import style from './style.module.css';

const FooterForm = () => {
    return (
        <div className={ style.footerFormWrap }>
            <div className={ style.footerFormContentLeft }>
                <p>
                Leave your information now and you will be on your way to success 
                </p>
            </div>
            <div style={{ width: '100%' , paddingTop: '15px'}} >
                <Inputs />
            </div>
            
        </div>
    );
}

export default FooterForm