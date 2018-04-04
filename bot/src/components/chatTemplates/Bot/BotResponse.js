import React from "react";
import {Component} from "react";

class BotResponse extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (this.props.response) {
            return (
                <div className="d-flex flex-row">
                    <p className="h6 rounded chat-body__botMsg p-2">{this.props.response}</p>
                </div>
            );
        }
        else {
            return (null);
        }

    };
}

export default BotResponse;