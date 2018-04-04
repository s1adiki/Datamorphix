import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {onOpen} from "../actions/chatMessages";
import Messages from "./Messages";

class Chat extends Component{
     constructor(props){
         super(props);
     };

     componentWillMount(){
         if(this.props.texts.length ===0){
             this.props.getInitialText();
         }
     };

     render(){
        return(
            <div className="container chat-text">
                <div className="row justify-content-start">
                    <div className="col-sm-11 col-lg-11 col-md-11">
                        <Messages texts={this.props.texts}/>
                    </div>
                </div>
            </div>
        );
     }
}

const mapStateToProps = (state) =>{
    return{
        texts:state.chatMessages
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        getInitialText: () => dispatch(onOpen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
