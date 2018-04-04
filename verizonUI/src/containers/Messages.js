import React from "react";
import {Component} from "react";
import {v4} from "node-uuid";
import BotReply from "../components/chatTemplates/Bot/BotReply";
import BotResponse from "../components/chatTemplates/Bot/BotResponse";
import URL from "../components/chatTemplates/Bot/URL";
import BotButtons from "./BotButtons"
import UserResponse from "../components/chatTemplates/User/UserResponse";
import CustomRequest from "../components/chatTemplates/User/CustomRequest";
import Time from "../components/chatTemplates/Time";

class Messages extends Component {
    constructor(props) {
        super(props);
    };

    componentDidUpdate(){
        let elementBody =  document.getElementsByClassName("chat-body")[0];
        let elementChild =  document.getElementsByClassName("chat-text__container")[0];
        elementBody.scrollBy(0,elementChild.clientHeight + elementBody.clientHeight );
    };

    render() {
        return (
            <div className="chat-text__container">
                {
                    this.props.texts.map(text => (
                            <div key={v4()} className="d-flex flex-column">
                                <Time/>
                                <UserResponse userResponse={text.userResponse}/>
                                <CustomRequest userRequest ={text.customRequest}/>
                                <BotReply reply={text.reply}/>
                                <BotResponse response={text.response}/>
                                <URL url={text.url}/>
                            </div>
                        )
                    )
                }
                <BotButtons
                    buttons={this.props.texts.length > 0 && this.props.texts[this.props.texts.length - 1].buttons}/>
            </div>
        );
    }
}

export default Messages;