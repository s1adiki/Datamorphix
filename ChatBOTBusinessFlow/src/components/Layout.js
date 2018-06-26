import React from "react";
import {Component} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Layout extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="container-fluid layout-container">
                <div className="row">
                    <div className="col layout-header">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col layout-body">
                        <Body/>
                    </div>
                </div>
                <div className="row">
                    <div className="col layout-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Layout;