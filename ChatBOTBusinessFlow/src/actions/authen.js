import fetch from "cross-fetch";

export const changeStatusToLogin = () => {
    return {
        type: "login"
    };
};

export const changeStatusToLogout = () => {
    return {
        type: "logout"
    };
};


export const getCredentials = () => {
    return {
        type: "getCredentials"
    };
};

export const statusUpdateToLoginClose = () => {
    return {
        type: "closeLogin"
    };
};

export const statusUpdateToEmptyForm = () => {
    return {
        type: "closeForm"
    };
};

export const verifyCredentials = (id, code) => {
    return dispatch => {
        fetch('http://54.213.230.201:1313/intellisoft/login?email='+ id + '&password=' + code)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return res.json();
            })
            .then(response => {
                dispatch(receivedData(response));
            })
            .catch(err => {
                console.error(err);
            });
    };
};

export const deployTrainIntentData = (data) => {
    console.log(data);
    return dispatch => {
        fetch('http://54.213.230.201:1313/intellisoft/botUpdate?deployData='+ JSON.stringify(data))
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return res.json();
            })
            .then(response => {
                dispatch(receivedDeployData(response));
            })
            .catch(err => {
                console.error(err);
            });
    };
};


const receivedData = (response) => {
    if(response.login){
        return {
            type:"login"
        };
    }
    else{
        return{
            type:"closeLogin"
        };
    }
};

const receivedDeployData = (response) => {
    if(response.login){
        return {
            type:"success"
        };
    }
    else{
        return{
            type:"fail"
        };
    }
};


export const botTrainingForm = () =>{
    return{
        type:"botTrainingForm"
    };
};

export const addIntentTextbox = (idx) =>{
    return{
        type:"addIntentTextbox",
        idx:idx,
        followup_Content:{
            idx:idx,
            handleFollowIntent:'',
            handleFollowResponseIntent:''
        }  
    };
};

export const removeIntentTextbox = (idx) =>{
    return{
        type:"removeIntentTextbox",
        idx:idx
    };
};

export const handleIntentChange = (intent) =>{
    return{
        type:"handleIntentChange",
        intent:intent
    };
};


export const handleFollowupChange = (idx, handleFollowupIntentChange, handleFollowupResponseIntentChange) =>{
    return{
        type:"handleFollowupChange",
        idx:idx,
        followup_Content:{
            idx:idx,
            handleFollowIntent:handleFollowupIntentChange,
            handleFollowResponseIntent:handleFollowupResponseIntentChange
        }  
    };
};

export const statusUpdateToLoading = () => {
    return {
        type: "loading"
    };
};

export const saveIntentContent = (intentData) =>{
    return{
        type:"saveIntentContent",
        intentData:intentData
    }
};