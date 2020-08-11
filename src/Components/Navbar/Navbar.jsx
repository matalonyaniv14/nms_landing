import React from 'react';

import Logo from './Logo.jsx';
import navBar from './styles/navbar.module.css';
import Button from '../Button/Button.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';

const Navbar = ( { mobile } ) => {

    return (
        <div className={ navBar.wrap }>
            <Logo />
            { !mobile && <div className={ navBar.socialCta }>
                <Button text="Get In Touch" style={ { width: '40%' } }/>
                <SocialLinks />
            </div> }
        </div>
    )
}

export default Navbar;