import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import loading from "../assets/images/loading.gif";


class LoadingGIF extends Component{

	constructor(props){
        super(props);
        this.state = {};        
    };

    render(){
        if (this.props.loading) {
        return(
            <div className="loadingdiv">
            <img className="img-loader"  src={loading}/>
            </div>
        )}
        else {
                return (null)           
        }        
    };
}

const mapStateToProps = (state) => {
    return {
       loading: state.status.loading,
       statusUpdateToDelopy: state.status.statusUpdateToDelopy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoadingGIF);