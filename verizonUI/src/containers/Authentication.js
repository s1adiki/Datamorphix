import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {getCredentials, changeStatusToLogout} from "../actions/authen";

class Authentication extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (!this.props.authenticated){
            return (
                <button className="btn btn-info" onClick={() => this.props.getCredentials()}>Sign In</button>

            );
        }
        else {
            return (
                <button className="btn btn-secondary" onClick={() => this.props.logout()}>Log Out</button>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.status.authenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCredentials: () => dispatch(getCredentials()),
        logout: () => dispatch(changeStatusToLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);