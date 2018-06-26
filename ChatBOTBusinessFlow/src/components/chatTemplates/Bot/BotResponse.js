import React from "react";
import {Component} from "react";

class BotResponse extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.response !==null){
            return(
                <div className="d-flex flex-row chat-body__msg--div">
                    <div className="p-2 rounded chat-body__msg">
                        <p className="h5">{this.props.response}</p>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div>

                </div>
            )
        }

    };
}

export default BotResponse;