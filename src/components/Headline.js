import React from 'react';
import './Styles.css';


const Headline = (props) => {
    return (
        <div className="headline component">
            <h1>Pomodoro clock {props.additional}</h1>
        </div >
    )
}


export default Headline