import React from 'react';

import style from './style.module.css';


const Inputs = ( ) => {
    

    const handleClick = ( e ) => {
        let elem = e.target;
        if ( elem ) {
            elem.style.paddingLeft = '5%';
            elem.placeholder = '';
        }
    }

    const handleBlur = ( e, place ) => {
        let elem = e.target;
        if ( elem.value.length > 0 ) {
            elem.style.border = '3px solid #0AB78F';
            return;
        } 

        elem.style.border = '1px solid #CC0000';

        if ( elem ) {
            elem.style.paddingLeft = '0px';
            elem.placeholder = place;
        }
    }


    return (
        <div className={ style.inputs }>
            <input type="hidden" name="form_id" value="1545397" />
            <input type="hidden" name="encoding" value="UTF-8"></input>
            <input onBlur={ ( e ) => handleBlur(e, 'Full Name and Company Name' )} onFocus={handleClick} 
                name="fields[subscribers_name]"
                type="text" 
                placeholder='Full Name and Company Name'
                
                />
            <input onBlur={ ( e ) => handleBlur(e, 'Email' )} onFocus={handleClick}
                name="fields[subscribers_email]"
                type="text" 
                placeholder='Email'/>
            <input onBlur={ ( e ) => handleBlur(e, 'Phone Number' )} onFocus={handleClick} 
                name="fields[subscribers_phone]"
                type="text" 
                placeholder='Phone Number'/>
            <div style={{ marginTop: '50px', width: 'auto' }}>
                   <input type="submit" value='Submit Now'/>
            </div>
        </div>
    );
}

export default Inputs;

// name="fields[subscribers_name]"
// name="fields[subscribers_email]"
// name="fields[subscribers_phone]"