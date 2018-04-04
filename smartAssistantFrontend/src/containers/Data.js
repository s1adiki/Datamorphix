import React from "react";
import {Component} from "react";
import {connect} from 'react-redux'
import fetch from "cross-fetch";
import {DisplayTable} from "../components/DisplayTable";
import {botMinimizeAction} from "../actions/chatOpenAction";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        let responseArray = nextProps.lastResponse;
        let len = responseArray.length - 1;
        if (responseArray[len].action !== "clear_screen") {
            if (responseArray[len].actionChange) {
                fetch("http://54.149.198.130:3030/" + responseArray[len].action+"?parameters="+ JSON.stringify(responseArray[len].parameters))
                    .then(res => {
                        if (res.status >= 400) {
                            throw new Error("Bad response from server");
                        }
                        return res.json();
                    })
                    .then(data => {
                        this.setState({data: data});
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        } else {
            this.setState({data: null});
        }

    }

    componentDidUpdate(props) {
        let responseArray = props.lastResponse;
        if (responseArray.length > 0) {
            if (this.state.data !==null) {
                this.props.minimizeChatArea();
            }
        }
    }

    render() {
        if (this.state.data === null) {
            return null;
        }
        return (<DisplayTable data={this.state.data}/>);
    }
}

const mapStateToProps = state => {
    return {
        lastResponse: state.botReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        minimizeChatArea: () => dispatch(botMinimizeAction())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);


