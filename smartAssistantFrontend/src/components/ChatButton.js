import React from 'react';
import MdChatBubble from 'react-icons/lib/md/chat-bubble';


export const ChatButton = (props) => {
    return (
        <div onClick={() => props.openChatArea()}>
            <MdChatBubble className="Bot-icon"/>
        </div>
    );
};
