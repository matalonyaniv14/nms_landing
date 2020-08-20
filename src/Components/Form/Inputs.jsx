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
// url: 'http://api.responder.co.il/main/lists'

//" Authorization: c_key=50D173C926F5C7995992943558F37DDD,c_secret=C4BEE5F7600F09A42154DD7F5FBA91FA,u_key=E7879AED7C0FD4643539FF65DC78FFE6,u_secret=ADFD7E96D1838978ACDA79DC406B7A77,nonce=3153910c36975aa44fe770be72d3bfd3,timestamp=1597684744"


// curl -H "Authorization: c_key=50D173C926F5C7995992943558F37DDD,c_secret=c4ac6287405432d4f1a78e33b21ca5e7,u_key=D37995392DF7E26EA4CD224D2053E32F,u_secret=0c089de9b54ff2def6d6c464d9cb1948,nonce=3153910c36975aa44fe770be72d3bfd991,timestamp=1597848585"  http://api.responder.co.il/main/lists?list_ids=795689