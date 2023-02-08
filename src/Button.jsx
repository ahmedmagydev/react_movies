import React from "react";
import './style.css'
class Button extends React.Component{
    constructor(props){
        super()
        console.log(props)

    }
    render(){
        return (
            
                <button className={`btn btn-${this.props.btnColor}`}> {this.props.myValue}  </button>

            
        )
    }


}
export default Button