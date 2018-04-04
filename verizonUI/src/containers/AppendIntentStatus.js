import React from "react";
import {Component} from "react";
import {connect} from "react-redux";

class AppendIntentStatus extends Component{

	constructor(props){
        super(props);
        this.state = {};        
    };

    render(){
        if (this.props.addIntentStatus) {
        return(
            <div>
            <label className="text-danger">Intent added</label><br/><br/>
            </div>
        )}
        else {
            return (null)
        }        
    };
}

const mapStateToProps = (state) => {
    return {
       addIntentStatus: state.status.addIntentStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppendIntentStatus);