import React from "react";
import {Component} from "react";

class URL extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.url !==null){
            return(
                <div className="d-flex flex-row chat-body__msg--div">
                    <div className="p-2 rounded chat-body__msg">
                        <a href={this.props.url} target="_blank">Click Here</a>
                    </div>
                </div>
            );
        }
        else {
            return(null);
        }

    };
}

export default URL;