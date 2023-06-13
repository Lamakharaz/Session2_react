import React, { useState } from "react";

function WelcomeF(props) {

    //hooks
    const[counter,setCounter]=useState(0);

    return (<>
    <h6>(Function)</h6>
    <h1> Welcome, {props.name}! </h1>
    <h6> type, {props.gender}! </h6>
    <h6> Age:{props.age}</h6>
    <h6> counter: {counter}</h6>
    <button onClick={()=>setCounter(counter+1)}>Counte+1 </button>
    </>)
}export default WelcomeF;


