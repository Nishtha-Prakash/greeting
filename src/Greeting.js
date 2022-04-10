import React from 'react';
import './index.css';

const Greeting = () => {

    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if (curDate >= 1 && curDate <= 12) {
        greeting = "Good Morning";
        cssStyle.color = "red";
    }
    else if (curDate > 12 && curDate < 20) {
        greeting = "Good Evening";
        cssStyle.color = "green";
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "blue";
    }

    return (
        <>
            <div class="container">

                <h1>Hello, <span style={cssStyle}> {greeting} </span></h1>
            </div>
            <p >
                <h2>This page will greet you according to the time by your clock!!</h2>
            </p>
            
        </>
    );
}

export default Greeting;