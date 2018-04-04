import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {onRequest} from "../actions/chatMessages";
import Chat from "./Chat"
import voice from "../assets/images/voice.svg"


class ChatArea extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        let userMsg="";
        return (
            <div className="chat-container">
                <div className="row justify-content-start">
                    <div className="col">
                        <div className="chat-body">
                            <Chat/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col">
                        <div className="chat-footer">
                            <div className="container">
                                <div className="row justify-content-start input-group input-group-lg">
                                    <div className="col">
                                        <div className="d-flex justify-content-between">
                                            <input type="text" className="form-control mr-1" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                                   ref={node =>
                                                   {
                                                       userMsg = node
                                                   }
                                                   }
                                                   onKeyPress={
                                                       (event) => {
                                                           if (event.key === 'Enter' && userMsg.value.trim() !== "") {
                                                               this.props.fetchResponse(userMsg.value.trim());
                                                               userMsg.value = "";
                                                           }
                                                       }
                                                   }
                                            />
                                            <button className="btn btn-primary" onClick={
                                                (event) => {
                                                    if (userMsg.value.trim() !== "") {
                                                        this.props.fetchResponse(userMsg.value.trim());
                                                        userMsg.value = "";
                                                    }
                                                }
                                            }>
                                                Send
                                            </button>
                                            <img src={voice}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchResponse: (request) => dispatch(onRequest(request)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);