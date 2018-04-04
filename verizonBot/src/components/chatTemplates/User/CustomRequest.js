import React from "react";
import {Component} from "react";

class CustomRequest extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.userRequest !== null){
            return(
                <div className="d-flex flex-row-reverse">
                    <p className="h6 rounded chat-body__userMsg p-2">{this.props.userRequest}</p>
                </div>
            );
        }
        else{
            return(null);
        }

    };
}

export default CustomRequest;