import {v4} from "node-uuid";

export const chatMessages = (state = [], action) => {
    let userResponse = null;
    let customRequest = null;
    switch (action.type) {

        case "start":
            userResponse = null;
            customRequest = null;
            let time = new Date();
            if (action.payload !== null) {
                time = action.payload.tracker.latest_event_time;
                if (action.payload.tracker.latest_message.text === "Main Menu") {
                    userResponse = action.payload.tracker.latest_message.text;
                } else {
                    customRequest = action.payload.tracker.latest_message.text;
                }
            }
            return [
                ...state,
                {
                    time: time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Welcome to  Verizon Technical Support! My name is Tina."],
                    response: "What can I help you with today?",
                    buttons: ["Phones", "Plans", "Deals", "Manage Account"]
                }
            ];
        case "Greeting":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Hello there"],
                    response: "I can help you with the following",
                    url: null,
                    buttons: ["Phones", "Plans", "Deals", "Manage Account"]
                }
            ];
        case "Bye":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Its my pleasure assisting today"],
                    response: "For other queries click on Main Menu.",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];


        case "Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with Phones"],
                    response: "Please choose a category",
                    buttons: ["Smart Phones", "Basic Phones", "Pre-owned Phones"]
                }
            ];
        case "Smart Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Smart Phone") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular smart phones"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"",},{},{}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Basic Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Basic Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular basic phones"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Pre-owned Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Pre-owned Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our best pre-owned phones"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Plans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Plans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with our plans"],
                    response: "Here are our popular pland",
                    buttons: ["Unlimited Plus", "Unlimited", "Limited"]
                }
            ];
        case "Unlimited Plus":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Unlimited Plus") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular unlimited plus plans"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Unlimited":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Unlimited") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular unlimited plans"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Limited":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Limited") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular limited plans"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with our best deals"],
                    response: "Here are are our hot deals right now",
                    buttons: ["Apple Deals", "Android Deals", "Tablets Deals", "Accessories Deals"]
                }
            ];
        case "Apple Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Apple Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on apple devices"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Android Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Android Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on android devices"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Tablets Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Tablets Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on tablets"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Accessories Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Accessories Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on accessories"],
                    response: "Please select one of the following for more information",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];



        case "Manage Account":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Manage Account") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Thank you, I can definitely help you out with Account."],
                    response: "Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons: ["Username and Password", "Update Billing Information", "Update Contact Information", "Request Receipts"]
                }
            ];
        case "Username and Password":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Username and Password") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Don't remember your username or password? We've all been there.",
                        "Just visit My Account. Follow the \"forgot password\" link and enter the email address you use for your Boingo account.",
                        "Then, you'll receive an email with a recovery link. When you follow the link, you'll see your username and will have the option to reset your password. It's that simple!",
                        "Didn't receive the recovery email? You can check your spam folder, or try using a different email address."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Update Billing Information":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Update Billing Information") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["You can update your billing information by following these steps"],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];

        case "Update Contact Information":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Update Contact Information") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["You can update your contact information through \"My Account\".",
                        "Log in to My Account and choose the “Update Contact Info” link on the left hand side. Make all the necessary changes and select \"Submit\". Your info is updated!"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Request Receipts":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Request Receipts") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Boingo receipt preferences are managed through \"My Account\".",
                        "Login to My Account and select the “Update Contact Info” link on the left hand side.",
                        "Scroll down to the bottom of the page and select/deselect the checkbox beside \"I would like to receive email receipts for all charges to my credit card\"."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["We are happy to have solve your issue today. For other queries click on Main Menu."],
                    response: "Thank you",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];
        case "Not Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Not Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["What is your email address?"],
                    response: "We will get back to you soon on this issue.",
                    url: null,
                    buttons: []
                }
            ];
        case "EmailId":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Your request has been submitted with ticket number " + v4()],
                    response: null,
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];

        default:
            return state;
    }
};