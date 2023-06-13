import React, { useState } from "react";

function WelcomeF(props) {

    //hooks
    const[counter,setCounter]=useState(0);
    const[name,setName]=useState(" ");

    return (<>
    <h6>(Function)</h6>
    <h1> Welcome, {props.name}! </h1>
    <h6> type, {props.gender}! </h6>
    <h6> Age:{props.age}</h6>
    <h6> counter: {counter}</h6>
    <h6> Name: {name}</h6> 
    <button onClick={()=>setCounter(counter+1)}>Counte+1 </button>
    <button onClick={()=>setName(props.name)}>Change Name </button>
    
    </>)
}export default WelcomeF;


