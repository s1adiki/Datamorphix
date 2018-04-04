import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import closeLogo from "../assets/images/closeIcon.svg";
import {statusUpdateToLoginClose,statusUpdateToEmptyForm, saveIntentContent, statusUpdateToLoading} from "../actions/authen";
import {addIntentTextbox, removeIntentTextbox, handleIntentChange} from "../actions/authen";
import {v4} from "node-uuid";
import AppendIntentStatus from "./AppendIntentStatus";


class BotTraining extends Component {
 
    constructor(props) {
        super(props);
        this.state = {intent:"", intent_Followup:"", intent_Followup_Response:"",textboxDiv_Id:'', followupIntentChange:[], followupResponseIntentChange:[], followupIntentContent:{}, validData:true};
        this.handleFollowResponseChange = this.handleFollowResponseChange.bind(this);
        this.handleIntentChange = this.handleIntentChange.bind(this);
        this.handleIntentFollowChange = this.handleIntentFollowChange.bind(this);
        this.handleSubmitIntent = this.handleSubmitIntent.bind(this);
        this.handelAddIntentTextbox = this.handelAddIntentTextbox.bind(this);
        this.saveTrainIntents = this.saveTrainIntents.bind(this);
        this.handelCloseIntentDiv = this.handelCloseIntentDiv.bind(this);       
    };

    handleIntentChange(event) {
        this.setState({intent: event.target.value});        
    }

    handleIntentFollowChange(event) {
        this.setState({intent_Followup: event.target.value});
    }

    handleFollowResponseChange(event) {
        this.setState({intent_Followup_Response: event.target.value});
    }

    handleSubmitIntent(event){
        event.preventDefault();      
    }
  
    handelAddIntentTextbox(event){
      event.preventDefault();
      this.state.textboxDiv_Id=v4();
      this.props.addIntentTextbox(this.state.textboxDiv_Id);
    }  

    handelCloseIntentDiv(event){
      this.props.statusUpdateToLoginClose();
      this.props.statusUpdateToEmptyForm();
    }  

    handleFollowupIntentChange(textbox_id,event) {
      console.log(this.state.followupIntentChange);
      const followupIntentChange = this.state.followupIntentChange;
      followupIntentChange[textbox_id+'1'] = event.target.value;
      this.setState({ followupIntentChange: followupIntentChange });      
    }

    handleFollowupResponseIntentChange(textbox_id, event) {
      console.log(this.state.followupResponseIntentChange);
      const followupResponseIntentChange = this.state.followupResponseIntentChange;
      followupResponseIntentChange[textbox_id+'2'] = event.target.value;
      this.setState({ followupResponseIntentChange: followupResponseIntentChange });      
    }

    saveTrainIntents(event){
      /*this.props.statusUpdateToLoading();*/
      const div_Length = this.props.textboxAppend.length;
      const idx_Array=[];
      const followupIntentChange_content=[];
      const followupResponseIntentChange_content=[];
      followupIntentChange_content.push(this.state.intent_Followup);
      followupResponseIntentChange_content.push(this.state.intent_Followup_Response);

      {this.props.textboxAppend.map(textbox =>   
        idx_Array.push(textbox.idx),        
        )}
      
      for (var i = 0; i < idx_Array.length; i++) {        
          followupIntentChange_content.push(this.state.followupIntentChange[idx_Array[i]+'1']);
          followupResponseIntentChange_content.push(this.state.followupResponseIntentChange[idx_Array[i]+'2']);
      };

      this.state.followupIntentContent={
        intentValue:this.state.intent,        
        followupIntentChange_content:followupIntentChange_content,
        followupResponseIntentChange_content:followupResponseIntentChange_content
      }
      this.state.validData=true;

      if(this.state.intent===''||this.state.intent===undefined||this.state.intent_Followup===''||this.state.intent_Followup===undefined||this.state.intent_Followup_Response===''||this.state.intent_Followup_Response===undefined){
        this.state.validData=false;
      }
      
      for (var i = 0; i < idx_Array.length; i++) {
        if((this.state.followupIntentChange[idx_Array[i]+'1']==='')||(this.state.followupIntentChange[idx_Array[i]+'1'])===undefined||(this.state.followupResponseIntentChange[idx_Array[i]+'2'])===undefined||(this.state.followupResponseIntentChange[idx_Array[i]+'2'])===''){
          this.state.validData=false;
        }        

      };
      if(this.state.validData){
        console.log(this.state.followupIntentContent);
        this.props.saveIntentContent(this.state.followupIntentContent);
        this.state.intent='';
        this.state.intent_Followup='';
        this.state.intent_Followup_Response='';
        this.props.statusUpdateToEmptyForm();
      }      
    }



    render() {
        if (!this.props.authenticated && this.props.isformBOTStatus) {
            return (
                <div className="sidenavdiv-container ">
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-header">
                                <div className="d-flex justify-content-between">
                                    <p className="h6 text-white">
                                        BOT Action Training
                                    </p>
                                    <img className="figure-img img-fluid rounded sidenavdiv-header__img cursor"
                                         onClick={this.handelCloseIntentDiv} src={closeLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-body intentscroll">
                                <form onSubmit={this.handleSubmitIntent}>
                                    <div className="form-group px-3 pt-3 ">
                                        <AppendIntentStatus/>
                                        <label htmlFor="exampleInputEmail1">Intent</label>
                                        <input type="text" className="popuptextalighfull form-control form-control-lg form-padding"
                                               id="exampleInputEmail1" aria-describedby="emailHelp"
                                               placeholder="Enter Intent" required
                                              value={this.state.intent} onChange={this.handleIntentChange}
                                        />                                       
                                    </div>
                                    <div className=" px-3 position-relative allignintentdiv">
                                        <label htmlFor="exampleInputPassword1">Intent Followup</label>
                                        <input type="text" className="form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup" required
                                              value={this.state.intent_Followup} onChange={this.handleIntentFollowChange}
                                        />                                    
                                        <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                                        <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup Response" required
                                               value={this.state.intent_Followup_Response} onChange={this.handleFollowResponseChange}
                                        />
                                    </div>   

                                    <div>{this.props.textboxAppend.map(textbox =>(                                        
                                    <div className=" px-3 position-relative allignintentdiv" key={textbox.idx}>
                                          <label htmlFor="exampleInputPassword1">Intent Followup</label>
                                          <input type="text" className="form-control form-control-lg form-padding poptextbox"
                                                 id={textbox.idx+'1'} placeholder="Intent Followup" required
                                                 value={this.state.followupIntentChange[textbox.idx]} onChange={this.handleFollowupIntentChange.bind(this,textbox.idx)}
                                          />            
                                          <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                                          <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                                 id={textbox.idx+'2'} placeholder="Intent Followup Response" required
                                                 value={this.state.followupResponseIntentChange[textbox.idx]} onChange={this.handleFollowupResponseIntentChange.bind(this,textbox.idx)}                                                   
                                          />
                                          <button type="button" onClick={() => this.props.removeIntentTextbox(textbox.idx)} className="removetextintent cursor">X</button>
                                      </div>
                                       ))}</div> 

                                    <div className="d-flex justify-content-between px-5 pb-3 position-relative margin_div">
                                        <button type="button" className="p-2 btn btn-info mr-1" onClick={this.handelAddIntentTextbox}>Add More</button>
                                        <button type="submit" className="p-2 btn btn-info width_button" onClick={this.saveTrainIntents}>Save</button>
                                        <button type="submit" className="p-2 btn btn-info width_button" onClick={this.handelCloseIntentDiv}>Cancel</button>
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                null
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isformBOTStatus: state.status.formBotStatus,
        textboxAppend: state.status_append  
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        statusUpdateToLoginClose: ()=>dispatch(statusUpdateToLoginClose()),
        statusUpdateToEmptyForm: ()=>dispatch(statusUpdateToEmptyForm()),
        addIntentTextbox: (textboxDiv_Id)=>dispatch(addIntentTextbox(textboxDiv_Id)),
        removeIntentTextbox: (textbox_id)=>dispatch(removeIntentTextbox(textbox_id)),
        saveIntentContent: (followupIntentContent)=>dispatch(saveIntentContent(followupIntentContent)),
        statusUpdateToLoading: ()=>dispatch(statusUpdateToLoading())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotTraining);
