import React from "react";
import "../styles/bot.css";

export const ChatMessages = ({responses}) => (
    <div id="chatChild">
        {responses.map(response => (
            <Messages key={response.id} {...response}/>
        ))
        }
    </div>
);

const Messages = ({send, result, timestamp}) => (
    <div>
        <br/>
        <div className="timeDiv">
            <p className="requestTime">
                {timestamp}
            </p>
        </div>

        <div className="requestDiv">
            <p className="requestMessage">
                <span className="messageHeader">
                    You:&nbsp;
                </span>
                <span className="messageData">
                    {send}
                </span>
            </p>
        </div>

        <br/>

        <div className="responseDiv">
            <p className="receivedMessage">
                <span className="messageHeader">
                    Tina:&nbsp;
                </span>
                <span className="messageData">
                    {result}
                </span>
            </p>
        </div>
        <br/>
    </div>

);

