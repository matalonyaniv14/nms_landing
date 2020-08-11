import React from 'react';

import style from './style.module.css';
import Inputs from './Inputs.jsx';


const Form = () => {
    return (
        <div className={ style.wrap }>
            <div className={ style.content }>
                <p>If you have a business that is two or more years old 
                    and is located in New York, enter your details below
                </p>
            </div>
            <div>
                <form field-count="3"  action="https://subscribe.responder.co.il/" method="post"  noValidate="novalidate"> 
                    <Inputs />
                </form>
            </div>  
        </div>
    );
}

export default Form;