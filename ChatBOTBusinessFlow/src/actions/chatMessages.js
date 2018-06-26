import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:5009/conversations/intellisoft/parse?q=" + request)
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


        case "About Intellisoft":
            type="About Intellisoft";
            break;
        case "Services":
            type="Services";
            break;
        case "Contact Intellisoft":
            type="Contact Intellisoft";
            break;
        case "Products and Solutions":
            type="Products and Solutions";
            break;


        case "Mission":
            type = "Mission";
            break;
        case "Why Intellisoft ?":
            type = "Why Intellisoft ?";
            break;
        case "Big Data Platform":
            type = "Big Data Platform";
            break;
        case "ERP/Bussiness Applications":
            type = "ERP/Bussiness Applications";
            break;


        case "Digital Commerce":
            type = "Digital Commerce";
            break;
        case "E-Learning":
            type = "E-Learning";
            break;
        case "Mobility":
            type = "Mobility";
            break;
        case "Unified Communication":
            type = "Unified Communication";
            break;


        case "Texas":
            type = "Texas";
            break;
        case "Memphis":
            type = "Memphis";
            break;
        case "California":
            type = "California";
            break;
        case "Hyderabad":
            type = "Hyderabad";
            break;
        case "Chennai":
            type = "Chennai";
            break;
        case "Kolhapur":
            type = "Kolhapur";
            break;


        case "Application/Product development":
            type = "Application/Product development";
            break;
        case "Big Data":
            type = "Big Data";
            break;
        case "Bussiness Intelligence and Analytics":
            type = "Bussiness Intelligence and Analytics";
            break;
        case "Cloud":
            type = "Cloud";
            break;
        case "Mobility":
            type = "Mobility";
            break;
        case "ERP Consulting":
            type = "ERP Consulting";
            break;
        case "Salesforce":
            type = "Salesforce";
            break;
        case "Sharepoint":
            type = "Sharepoint";
            break;
        case "Voice Over IP and Consulting":
            type = "Voice Over IP and Consulting";
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