import React from 'react';

import style from './style.module.css';

const stepsContent = {
    'STEP ONE': 'Request, fill out and submit the hassle free form',
    'STEP TWO': 'NMS will review and provide a free consultation',
    'STEP THREE': 'After your confirmation, NMS will collect all required information and submit them to the bank'
}


const Step = ( { title, message } ) => {
    return (
        <div className={ style.card }>
            <div className={ style.cardBanner }>
                <p> { title } </p>
            </div>
            <div className={ style.cardContent }>
                <p> { message } </p>
            </div>
        </div>
        );
}

const Steps = () => {
    const steps = Object.entries( stepsContent );

    return (
        <div>
            <div className={ style.stepsHeader }>
                <p>To start the process for a Business Line of Credit is as a easy as these 3 simple steps</p>
            </div>
            <div className={ style.cardWrap }>
                { steps.map( ( step, ind ) => {
                    return <Step  key ={ ind } title ={ step[0] } message = { step[1] }/>
                })}
            </div>
        </div>
    );
}

export default Steps;