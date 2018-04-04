import {ApiAiClient} from 'api-ai-javascript';
import {v4} from 'node-uuid';

const client =  new ApiAiClient({accessToken: 'd0715c31d29d423c94c946875d132b95'});


export const botAction = (request) => {
    return dispatch => {
        client.textRequest(request).then((response) =>{
            dispatch(receivedData(response));
        });
    };
};

const receivedData = (response)=>{
    let timestamp = response.timestamp;
    let date = new Date(timestamp);
    let hours = (date.getHours()<10?'0':'') + date.getHours();
    let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    let action = response.result.action;
    let actionChange = false;
    if (action !== '' && action !== 'input.unknown' && action.search("smalltalk.") !== 0){
        actionChange = true;
    }
    return{
        type: 'requestCall',
        id:v4(),
        send: response.result.resolvedQuery,
        result: response.result.fulfillment.speech,
        timestamp:hours +":"+minutes,
        action:response.result.action,
        actionChange:actionChange,
        parameters:response.result.parameters
    }
};