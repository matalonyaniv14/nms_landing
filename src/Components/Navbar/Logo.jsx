import React from 'react';

import logo from './NMS_LOGO.png'
import style from './styles/logo.module.css';

const Logo = () => {
    return (
        <div className={ style.wrap }>
            <img  height='80px' width='130px' src={logo} alt="NMS Credit Solutions"/>
            <div className={ style.content }>
                <p className={ style.header }>NMS CREDIT SOLUTIONS</p>
                <p className={ style.subHeader }>True and Honest</p>
            </div>
        </div>
    )
}

export default Logo;