import React from 'react';
import Clock from  '../Components/clock';

function TimeZone() {




    /*
    let KoreaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul", hour: "numeric" , minute: "numeric"});
    let ChinaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai", hour: "numeric" , minute: "numeric"});
    let PortugalTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Lisbon", hour: "numeric" , minute: "numeric"});
    let VenezuelaTime = new Date().toLocaleString("en-US", {timeZone: "America/Caracas", hour: "numeric" , minute: "numeric"});
    let PanamaTime = new Date().toLocaleString("en-US", {timeZone: "America/Panama", hour: "numeric" , minute: "numeric"});
    */

    


  return (
      <>
      <div className="grid grid-cols-2 lg:flex justify-center">
        <Clock Title="Korea" />
        <Clock Title="China" />
        <Clock Title="Portugal" />
        <Clock Title="Venezuela" />
        <Clock Title="Panama" />
      </div>
      </>
  )
}

export default TimeZone