import React from 'react';

import banner from './style.module.css';


const Banner = ( props ) => {
    return (
        <div className={ banner.wrap } style={ props.style }>
            { props.children }
        </div>
    );
}

export default Banner;