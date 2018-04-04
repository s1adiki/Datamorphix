import React from 'react';
import {Component} from 'react';
import '../styles/bot.css';
import ChatArea from './ChatArea'
import {connect} from 'react-redux';
import {ChatButton} from '../components/ChatButton'
import {chatOpenAction} from "../actions/chatOpenAction";


class Bot extends Component {

    render() {
        if (this.props.isChatOpen) {
            return <ChatArea/>;
        }
        else {
            return <ChatButton openChatArea={() => this.props.openChatArea()}/>;
        }
    }
}


const mapStateToProps = state => {
    return {
        isChatOpen: state.chatOpenReducer.chatOpen,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        openChatArea: () => dispatch(chatOpenAction())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Bot);

