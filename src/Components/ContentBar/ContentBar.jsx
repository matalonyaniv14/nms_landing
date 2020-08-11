import React from 'react';

import style from './style.module.css';
import {isTablet} from '../../Utils/matchDevice.jsx';

const Bar = ( props ) => {
    const { message } = props;
    
    return (
        <div className={ style.barWrap }>
            <div className={ style.barGreenBox }></div>
            <div className={ style.content }>
                <p> { message } </p>
            </div>
        </div>
    );
}


const ContentBarTablet = () => {
    return (
        <div className={style.contentBarTabletWrap}>
            <div>
                <Bar  message = "With a unique process, you can get affordable interest rate" />
                <Bar  message = "An approved business line of credit will guarantee your ability to tap into funds as you need them" />
            </div>
            <div>
                <Bar  message = "Have 100% control of how much money you take and when you take it" />
                <Bar  message = "Low credit? we can fix it and upgrade your credit score" />
            </div>
        </div>
    )
}

const ContentBarBase = () => {
    return (   
        <>
        <Bar  message = "With a unique process, you can get affordable interest rate" />
        <Bar  message = "An approved business line of credit will guarantee your ability to tap into funds as you need them" />
        <Bar  message = "Have 100% control of how much money you take and when you take it" />
        <Bar  message = "Low credit? we can fix it and upgrade your credit score" />
        </>
    );
}




const ContentBar = () => {
    return (
        <div className={ style.wrap }>
            <div className={ style.contentHeader }>
                <p>THE APPROVED PROGRAM SUPRISED BUSINESS OWNERS IN NEW YORK
                   TO OBTAIN A BUSINESS LINE OF CREDIT WITHOUT THE HASSLE OF THE 
                   MOUNTAIN OF REQUIRED DOCUMENTS AND BYPASSING THE BANK'S DRASTIC DEMANDS
                </p>
            </div>

          { isTablet() ? <ContentBarTablet /> : <ContentBarBase /> }
        </div>
    );
}

export default ContentBar;