import React from "react";
import {Component} from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="footer-container">
                <div className="d-flex justify-content-center">
                    <p>
                        Intellectual Property of IntelliSoft Technologies, Inc.
                    </p>
                </div>
            </div>
        );
    };
}

export default Footer;