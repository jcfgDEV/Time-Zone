import React from 'react';
import '../css/clock.css';
import '../Components/clockApp.js';


function Clock(props) {
  
  return (
    <>
      <div className="grid justify-center items-center m-8">
        <div className="m-4">
            <h1 className="text-4xl text-white text-center">{props.Title}</h1>
        </div>
          <div className="clock" >
              <div id="H" className="hours"></div>
              <div id="M" className="minutes"></div>
              <div id="S" className="seconds"></div>
          </div>
      </div>
    </>
  )
}

export default Clock;