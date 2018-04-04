import React from "react";
import {Component} from "react";
import {v4} from "uuid";
import {connect} from "react-redux";
import {onRequest} from "../../../actions/chatMessages";

class BotButtons extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.buttons) {
            return (
                <div className="d-flex justify-content-start my-1">
                    <div className="btn-group btn-group-sm">
                    {
                        this.props.buttons.map(button => (
                            <button type="button" className="btn btn-info mr-1 rounded" role="group" key={v4()}
                                    onClick={() => this.props.onRequest(button)}>{button}</button>
                        ))
                    }
                    </div>
                </div>
            );
        }
        else{
            return(null);
        }
    };
}

const mapStateToProps = (state) =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onRequest:(request)=>dispatch(onRequest(request))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotButtons);