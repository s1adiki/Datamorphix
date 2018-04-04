import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import closeLogo from "../assets/images/closeIcon.svg";
import {statusUpdateToLoginClose} from "../actions/authen";
import {verifyCredentials} from "../actions/authen";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email:'', password:''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.verifyCredentials(this.state.email, this.state.password);
    }
    render() {
        if (!this.props.authenticated && this.props.credentials) {
            return (
                <div className="login-container">
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="login-header">
                                <div className="d-flex justify-content-between">
                                    <p className="h6 text-white">
                                        Login
                                    </p>
                                    <img className="figure-img img-fluid rounded login-header__img cursor close"
                                         onClick={() => this.props.statusUpdateToLoginClose()} src={closeLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="login-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group px-3 pt-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control form-control-lg form-padding"
                                               aria-describedby="emailHelp"
                                               placeholder="Enter email" required
                                               value={this.state.email} onChange={this.handleEmailChange}
                                        />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email with
                                            anyone else.
                                        </small>
                                    </div>
                                    <div className="form-group px-3">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control form-control-lg form-padding"
                                               placeholder="Password" required
                                               value={this.state.password} onChange={this.handlePasswordChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between px-3 pb-3">
                                        <button type="submit" className="p-2 btn btn-info mr-1">Submit</button>
                                        <button type="reset" className="p-2 btn btn-info">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                null
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        credentials: state.status.credentials,
        authenticated: state.status.authenticated

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        statusUpdateToLoginClose: ()=>dispatch(statusUpdateToLoginClose()),
        verifyCredentials: (email, password)=>dispatch(verifyCredentials(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
