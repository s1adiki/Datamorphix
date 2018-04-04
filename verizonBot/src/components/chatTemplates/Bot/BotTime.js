import React from "react";
import {Component} from "react";

class BotTime extends Component{
    constructor(props){
      super(props);
    };

    render(){
        let date = null;
        if(typeof this.props.time === "number"){
            date = new Date(this.props.time* 1000);
        }
        else {
            date = new Date();
        }
        let hours = (date.getHours()<10?'0':'') + date.getHours();
        let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();

        return(
            <div className="d-flex flex-row">
                <p className="rounded mr-1 chat-body__userBot">VIVA</p>
                <p className="rounded chat-body__userBot">{hours +":"+minutes}</p>
            </div>
        );
    };
}

export default BotTime;