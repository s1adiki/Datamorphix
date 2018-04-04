import React from "react";
import {Component} from "react";
import {v4} from "uuid";
import BotReply from "../components/chatTemplates/Bot/BotReply";
import BotResponse from "../components/chatTemplates/Bot/BotResponse";
import URL from "../components/chatTemplates/Bot/URL";
import BotButtons from "../components/chatTemplates/Bot/BotButtons"
import UserResponse from "../components/chatTemplates/User/UserResponse";
import CustomRequest from "../components/chatTemplates/User/CustomRequest";
import BotTime from "../components/chatTemplates/Bot/BotTime";
import UserTime from "../components/chatTemplates/User/UserTime";
import Cards from "../components/chatTemplates/Bot/Cards";


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
                                <UserTime text={text}/>
                                <UserResponse userResponse={text.userResponse}/>
                                <CustomRequest userRequest ={text.customRequest}/>
                                <BotTime time = {text.time}/>
                                <BotReply reply={text.reply}/>
                                <BotResponse response={text.response}/>
                                <URL url={text.url}/>
                                <Cards cardDetails = {text.cardDetails}/>
                            </div>
                        )
                    )
                }
                <BotButtons buttons={this.props.texts.length > 0 && this.props.texts[this.props.texts.length - 1].buttons}/>
            </div>
        );
    }
}

export default Messages;