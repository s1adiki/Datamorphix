import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import Bot from "../containers/Bot";
import Login from "../containers/Login";
import BotTraining from "../containers/BotTraining";
import SideNavBar from "../components/SideNavBar"

class Body extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        if(this.props.isFormOpen){
            return (
                <div className="body-container">
                    <div className="row">
                        <div className="col-md-3 col-xl-3">
                            <SideNavBar/>
                        </div>
                        <div className="col-md-7 col-xl-7">
                            <Login/>
                            <BotTraining/>
                        </div>
                        <div className="col-md-1 col-md-1">
                            <Bot/>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="body-container">
                    <div className="row">
                        <div className="col-md-3 col-xl-3">
                            <SideNavBar/>
                        </div>
                        <div className="col-md-3 col-xl-3">
                        </div>
                        <div className="col-md-5 col-md-5">
                            <Bot/>
                        </div>
                    </div>
                </div>
            );
        }
    };
}

const mapStateToProps = state =>{
    return{
        isFormOpen:state.status.formStatus,
    };
};

const mapDispatchToProps = dispatch =>{
    return{

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);