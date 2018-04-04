import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:8000/conversations/default/parse?q=" + request)
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

const receivedData =(response)=>{
    let type="";
    switch(response.tracker.latest_message.intent.name){
        case "Greeting":
            type="Greeting";
            break;
        case "Bye":
            type="Bye";
            break;
        case "Main Menu":
            type="start";
            break;


        case "Technical Support":
            type="Technical Support";
            break;
        case "Cannot Connect to Wifi":
            type="Cannot Connect to Wifi";
            break;
        case "I'm Connected But Cannot Reach Internet":
            type="I'm Connected But Cannot Reach Internet";
            break;
        case "Device Limit Reached":
            type="Device Limit Reached";
            break;
        case "Frequent Disconnects":
            type="Frequent Disconnects";
            break;


        case "Manage Account":
            type = "Manage Account";
            break;
        case "Username and Password":
            type = "Username and Password";
            break;
        case "Upgrade Account":
            type = "Upgrade Account";
            break;
        case "Reactivate Account":
            type = "Reactivate Account";
            break;
        case "Review Plan Details":
            type = "Review Plan Details";
            break;
        case "Update Contact Information":
            type = "Update Contact Information";
            break;


        case "Billing Inquiry":
            type = "Billing Inquiry";
            break;
        case "Credits":
            type = "Credits";
            break;
        case "Request Receipts":
            type = "Request Receipts";
            break;
        case "Update Billing Information":
            type = "Update Billing Information";
            break;
        case "Refund Inquiry":
            type = "Refund Inquiry";
            break;


        case "Account Cancellation":
            type = "Account Cancellation";
            break;
        case "Recurring Wi-Fi Subscription":
            type = "Recurring Wi-Fi Subscription";
            break;
        case "Itunes Subscriptions":
            type = "Itunes Subscriptions";
            break;
        case "AsYouGo Plans":
            type = "AsYouGo Plans";
            break;
        case "Broadband Wi-Fi Subscriptions":
            type = "Broadband Wi-Fi Subscriptions";
            break;


        case "Not Helpful":
            type="Not Helpful";
            break;
        case "Helpful":
            type="Helpful";
            break;
        case "EmailId":
            type="EmailId";
            break;
        // case "Describe Problem":
        //     type="Describe Problem";
        //     break;
    }
    return{
        type:type,
        payload:response
    };
};

export const onOpen = () =>{
    return{
        type:"start",
        payload:null
    };
};