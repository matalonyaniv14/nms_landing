import React from 'react';

import style from './style.module.css';
import Banner from '../Banner/Banner.jsx';
import Button from '../Button/Button.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';

const Footer = () => {
    return (
        <Banner style={{height: '100px'}}>
            <div className={style.wrap}>
                <div className={ style.left }>
                    <p>nmscustomer@nmscredit.com</p>
                    <p>5009 avenue m, Brooklyn NY</p>
                    <p>1 ( 347 ) - 111 - 1111</p>
                </div>
                <div className={ style.right } >
                    <div style={ { width: '30%' } }>
                        <SocialLinks />
                    </div>
                    <Button style={ {width: '150px'} } text="Get In Touch"/>
                </div>
            </div>
        </Banner>
    );
}


export default Footer;