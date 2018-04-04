import React from "react";
import {Component} from "react";

class Time extends Component{
    constructor(props){
      super(props);
    };

    render(){
        let date = new Date();
        let hours = (date.getHours()<10?'0':'') + date.getHours();
        let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();

        return(
            <div className="d-flex justify-content-center chat-body__msg--div">
                <div className="p-2 rounded chat-body__msg chat-body__msg--time">
                    <p className="h5">{hours +":"+minutes}</p>
                </div>
            </div>
        );
    };
}

export default Time;