import React from 'react';

import bStyle from './button.module.css';

const Button = ( props ) => {
    const { text, style } = props;
    
    return (
        <div id='in-touch-btn' className={ bStyle.wrap } style={ style }  >
            <p> { text } </p>
        </div>
    );
}    

export default Button;