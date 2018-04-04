import React from "react";
import {Component} from "react";
import {v4} from "uuid";

class BotReply extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column">
                {
                    this.props.reply.map(msg => (
                        <div key={v4()} className="d-inline-flex">
                            <p className="h6 rounded chat-body__botMsg p-2 mb-1">{msg}</p>
                        </div>
                    ))
                }
            </div>
        )
    };
}

export default BotReply;