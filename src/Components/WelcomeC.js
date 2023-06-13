
import React from "react";
//this using in props class
class WelcomeC extends React.Component {

    
    constructor(props){
        console.log("inside constructor");
        super(props);
        this.state={
            firstname:"Lama ",
            lastname:"kharaz"
       }

    }
    render(){
        return( <>
        <h6> (Class) </h6>
         <h1> Welcome, {this.props.name}! </h1>
    <h6> type, {this.props.gender}! </h6>
    <h6> Age:{this.props.age}</h6>
    <h4> created by,{this.state.firstname}{this.state.lastname}</h4>
    <button onClick={()=>{
         this.setState({
            lastname:"THaeer"

        })

    }}>Change By Name </button>

        </>)

    }
    componentDidMount(){
        this.setState({
            lastname:"kharazzz"

        })
    }

}export default WelcomeC;