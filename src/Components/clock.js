import React from 'react';
import '../css/clock.css';

function clock(props) {
  return (
    <>
       <div className="grid justify-center items-center m-8">
        <div className="m-4">
            <h1 className="text-4xl text-white text-center">{props.Title}</h1>
        </div>
        <div className="clock">
            <div className="wrap">
                <span className="hour"></span>
                <span className="minute"></span>
                <span className="second"></span>
                <span className="dot"></span>
            </div>
        </div>
       </div>
    </>
  )
}

export default clock