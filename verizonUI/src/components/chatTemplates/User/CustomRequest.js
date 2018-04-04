import React from "react";
import {Component} from "react";

class CustomRequest extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.userRequest !== null){
            return(
                <div className="d-flex flex-row-reverse chat-body__msg--div">
                    <div className="p-2 rounded chat-body__msg">
                        <p className="h5">{this.props.userRequest}</p>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>

                </div>
            )
        }

    };
}

export default CustomRequest;