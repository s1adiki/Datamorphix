import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {botTrainingForm, conversationtrainingform, deployingbot, testingbot, statusUpdateToEmptyForm, deployTrainIntentData, statusUpdateToLoading} from "../actions/authen";
import {changeStatusToOpen} from "../actions/status";
import LoadingGIF from "../containers/LoadingGIF";

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {intentDeployData:{}};
        this.handelEmptyIntentDiv = this.handelEmptyIntentDiv.bind(this);
        this.conversationtrainingform = this.conversationtrainingform.bind(this);
        this.deployingbot = this.deployingbot.bind(this);
    };

    handelEmptyIntentDiv(event){
      this.props.botTrainingForm()
      this.props.statusUpdateToEmptyForm();
    }  

    conversationtrainingform(event){
      const url="http://54.213.230.201:8181";
      var win = window.open(url, '_blank');
      win.focus();
    }  

    deployingbot(event){
      
      this.state.intentDeployData = this.props.trainIntentDataToDeploy;
      console.log(this.state.intentDeployData);
      if(this.state.intentDeployData!==undefined){
        if(this.state.intentDeployData.length!==0){
          this.props.statusUpdateToLoading();
          const intentDict = {};        
          for (var i = 0; i < this.state.intentDeployData.length; i++) {
            const intent =this.state.intentDeployData[i].intentDataTrain.intentValue;
            const intentAppend=[];
            for (var j = 0; j < this.state.intentDeployData[i].intentDataTrain.followupIntentChange_content.length; j++) {            
              intentAppend.push({followupIntentChange:this.state.intentDeployData[i].intentDataTrain.followupIntentChange_content[j],followupResponseIntentChange:this.state.intentDeployData[i].intentDataTrain.followupResponseIntentChange_content[j]});
            };
            intentDict[intent]=intentAppend;
          };
          this.props.deployTrainIntentData(intentDict);
          console.log(intentDict);
        } else{
          alert("Please Add Intents to Deploy");
        }  
      }
        else{
          alert("Please Add Intents to Deploy");
        }   
      }  

    render() {
        if (this.props.authenticated) {
            return (
              <div className="sidenavdiv btn-md ">
                <div className="btn-sm btn-custom ">
                    <button className="btn btn-info sidenavbtn" onClick={this.handelEmptyIntentDiv} data-toggle="modal" data-target="#exampleModalCenter">Train BOT</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={this.conversationtrainingform} data-toggle="modal" data-target="#exampleModalCenter">Train Conversation</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={this.deployingbot} data-toggle="modal" data-target="#exampleModalCenter">Deploy BOT</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={() => this.props.statusUpdateToOpen()} data-toggle="modal" data-target="#exampleModalCenter">Test BOT</button></div>
                  <LoadingGIF/>
              </div>
            );
        }
        else {
            return(null);
        }

    };
}

const mapStateToProps = state =>{
    return{
        authenticated:state.status.authenticated,
        trainIntentDataToDeploy:state.status.intentData
    };
};

const mapDispatchToProps = dispatch =>{
    return{
      botTrainingForm: () => dispatch(botTrainingForm()),
      conversationtrainingform: () => dispatch(conversationtrainingform()),
      deployingbot: () => dispatch(deployingbot()),
      testingbot: () => dispatch(testingbot()),
      statusUpdateToEmptyForm: () => dispatch(statusUpdateToEmptyForm()),
      statusUpdateToOpen: () => dispatch(changeStatusToOpen()),
      deployTrainIntentData: (intentDeployData) => dispatch(deployTrainIntentData(intentDeployData)),
      statusUpdateToLoading: ()=>dispatch(statusUpdateToLoading())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SideNavBar);
