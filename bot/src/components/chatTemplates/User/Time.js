import React from "react";
import {Component} from "react";

class UserTime extends Component{
    constructor(props){
      super(props);
    };

    render(){
        let date = new Date(this.props.text.time * 1000);
        let hours = (date.getHours()<10?'0':'') + date.getHours();
        let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
        if(this.props.text.customRequest || this.props.text.userResponse){
            return(
                <div className="d-flex flex-row-reverse">
                    <p className="h6 rounded p-1">{hours +":"+minutes}</p>
                    <p className="h6 rounded mr-1  p-1">Valued Customer</p>
                </div>

            );
        }
        else{
            return(null);
        }
    };
}

export default UserTime;