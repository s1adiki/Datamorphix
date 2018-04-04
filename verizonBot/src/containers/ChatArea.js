import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {onRequest} from "../actions/chatMessages";
import Chat from "./Chat"
import voice from "../assets/images/voice.svg"
import listening from "../assets/images/listening.svg"


class ChatArea extends Component {

    constructor(props) {
        super(props);
        this.speechToText = this.speechToText.bind(this);
        this.sendReqOnEnter = this.sendReqOnEnter.bind(this);
        this.sendReqOnButton = this.sendReqOnButton.bind(this);
        this.userMsg = React.createRef();
    };

    sendReqOnEnter(event) {
        if (event.key === 'Enter' && this.userMsg.value.trim() !== "") {
            this.props.fetchResponse(this.userMsg.value.trim());
            this.userMsg.value = ""
        }
    }

    sendReqOnButton() {
        if (this.userMsg.value.trim() !== "") {
            this.props.fetchResponse(this.userMsg.value.trim());
            this.userMsg.value = ""
        }
    }

    speechToText() {
        if (!!window.chrome && !!window.chrome.webstore) {

            let recognition = new webkitSpeechRecognition();

            recognition.continuous = true;
            recognition.onresult = function (event) {
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        document.getElementById("inputText").value += event.results[i][0].transcript;
                    }
                }
            };

            if(document.getElementById("mic").alt === "ready"){
                document.getElementById("mic").src = listening;
                document.getElementById("mic").alt = "listening";
                recognition.start();
            }
            else{
                document.getElementById("mic").src = voice;
                document.getElementById("mic").alt = "ready";
                recognition.stop();
            }

        }
    }


    render() {


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
                                            <input type="text" id="inputText" className="form-control mr-2"
                                                   aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                                   ref={node => {
                                                       this.userMsg = node;
                                                   }}
                                                   onKeyPress={this.sendReqOnEnter}
                                            />
                                            <button className="btn btn-primary mr-2" onClick={this.sendReqOnButton}>
                                                Send
                                            </button>
                                            <img src={voice} onClick={this.speechToText} id="mic" alt="ready"/>
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

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResponse: (request) => dispatch(onRequest(request)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);