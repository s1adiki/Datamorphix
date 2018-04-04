import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:8000/conversations/verizon/parse?q=" + request)
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


        case "Phones":
            type="Phones";
            break;
        case "Smart Phones":
            type="Smart Phones";
            break;
        case "Basic Phones":
            type="Basic Phones";
            break;
        case "Pre-owned Phones":
            type="Pre-owned Phones";
            break;


        case "Plans":
            type = "Plans";
            break;
        case "Unlimited Plus":
            type = "Unlimited Plus";
            break;
        case "Unlimited":
            type = "Unlimited";
            break;
        case "Limited":
            type = "Limited";
            break;


        case "Deals":
            type = "Deals";
            break;
        case "Apple Deals":
            type = "Apple Deals";
            break;
        case "Android Deals":
            type = "Android Deals";
            break;
        case "Tablets Deals":
            type = "Tablets Deals";
            break;
        case "Accessories Deals":
            type = "Accessories Deals";
            break;


        case "Manage Account":
            type = "Manage Account";
            break;
        case "Username and Password":
            type = "Username and Password";
            break;
        case "Update Billing Information":
            type = "Update Billing Information";
            break;
        case "Request Receipts":
            type = "Request Receipts";
            break;
        case "Update Contact Information":
            type = "Update Contact Information";
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