import React from "react";
import {Component} from "react";
import ChatArea from "../containers/ChatArea";

class Layout extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="container-fluid layout-container">
                <div className="row">
                    <div className="col layout-body">
                        <ChatArea/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Layout;