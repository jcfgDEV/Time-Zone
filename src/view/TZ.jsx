import React from 'react';
import Clock from  '../Components/clock';


function TimeZone() {
   
  return (
    <>
      <div className="grid grid-cols-2 lg:flex justify-center">
        <Clock />
      </div>
    </>
  )
}

export default TimeZone