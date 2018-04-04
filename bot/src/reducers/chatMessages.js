import {v4} from "uuid";

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
                    reply: ["Welcome to Technical support! My name is Tina."],
                    response: "What can I help you with today?",
                    buttons: ["Technical Support", "Manage Account", "Billing Inquiry", "Account Cancellation"]
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
                    buttons: ["Technical Support", "Manage Account", "Billing Inquiry", "Account Cancellation"]
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


        case "Technical Support":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Technical Support") {
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
                    reply: ["Thank you, I can definitely help you out with Technical Support."],
                    response: "Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons: ["Cannot Connect to Wifi", "I'm Connected But Cannot Reach Internet", "Device Limit Reached", "Frequent Disconnects"]
                }
            ];
        case "Cannot Connect to Wifi":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Cannot Connect to Wifi") {
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
                    reply: ["Confirm your Wi-Fi is turned on. This option is usually located in the Settings menu.",
                        "Confirm in your network settings that you are connected to a Boingo Network.",
                        "Make sure your device is set to the correct time zone.", "Switch off your Wi-Fi, move approximately 50 feet and turn your Wi-Fi back on.",
                        "Note: Some partner SSID networks do not support mobile devices.",
                        "Boingo Wi-Finder App Users",
                        "Check that your username and password are stored correctly in the Boingo app. (If you updated your password online or with a Boingo Customer Care agent, you will need to manually update it within your app settings.)"
                    ],
                    response: "Please indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "I'm Connected But Cannot Reach Internet":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "I'm Connected But Cannot Reach Internet") {
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
                    reply: ["If you can connect to the network, but are unable to browse, try clearing the cache and cookies from your browser.",
                        "If that is not successful, try a different web browser."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Device Limit Reached":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Device Limit Reached") {
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
                    reply: ["Phone? Check. Tablet? Check. Computer? Check. Gaming console? Check. We know you have multiple devices and each of them uses Wi-Fi. Heck, there are even refrigerators that use Wi-Fi!",
                        "Managing those devices is as simple as logging into \"My Account\" and clicking \"Edit.\" Then, find \"Current Devices.\" From there you can add and delete devices from your account.",
                        "Right now, your Broadband account allows you to connect up to three devices at the same time. Most devices are added to your account automatically when you sign in.",
                        "For gaming consoles, find the MAC Address of your gaming console. Then, add it manually to your account."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Frequent Disconnects":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Frequent Disconnects") {
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
                    reply: ["Sometimes there is a very simple fix if you are experiencing problems. Try these easy steps to get you back online.",
                        "Confirm your Wi-Fi is turned on and you’re connected to the network named “Boingo Wireless,” “yourbasename_Wi-Fi,” “Boingo Wireless & yourlocation,” or similar.",
                        "Check your Wi-Fi signal strength. If it is low, try moving to an area with a stronger signal.",
                        "Check the MAC address of the device and make sure it is listed correctly in your account.",
                        "Rebooting your device will sometimes correct connection problems.",
                        "For gaming consoles, find the MAC Address of your gaming console. Then, add it manually to your account.",
                        "If that is not successful, try a different web browser."
                    ],
                    response: "Indicate your response whether this was helpful or not",
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
                    buttons: ["Username and Password", "Upgrade Account", "Reactivate Account", "Review Plan Details", "Update Contact Information"]
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
        case "Upgrade Account":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Upgrade Account") {
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
                    url: "http://www.boingo.com/retail/boingo-wi-fi-plans/",
                    reply: ["Click on the link to get a list of plans available on Boingo. You can update your plan in My Account"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Reactivate Account":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Reactive Account") {
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
                    url: "http://www.boingo.com/retail/boingo-wi-fi-plans/",
                    reply: ["Sign in to My Account.",
                        "If your account is inactive, you should see a message at the top of the page.",
                        "Select \"choose a plan\" and select the plan that works best for you.",
                        "Once your account is active, it's time to get your devices online.",
                        "Completely power off your devices and wait 10 minutes.",
                        "Turn them back on and they should get online automatically.",
                        "Alternatively, you can log in from the \"Already a Customer?\" page."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Review Plan Details":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Review Plan Details") {
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
                    reply: ["Log in to My Account, where you can review your account summary and plan type."
                    ],
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


        case "Billing Inquiry":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Billing Inquiry") {
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
                    reply: ["Thank you, I can definitely help you out with Billing."],
                    response: "Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons: ["Credits", "Request Receipts", "Update Billing Information", "Refund Inquiry"]
                }
            ];
        case "Credits":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Credits") {
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
                    reply: ["Consumers can purchase the $1.99 Wi-Fi credits in advance or at the time of connect simply by confirming the purchase using their iTunes account login.",
                        "The credits can be redeemed for 60 consecutive minutes of Wi-Fi access at a single Boingo hotspot, and can be used at any of the more than 125,000 Boingo hotspots worldwide."
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
                    reply: ["Boingo receipt preferences are managed through \"My Account\".",
                        "Login to My Account and select the “Update Contact Info” link on the left hand side.",
                        "Update the information"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Refund Inquiry":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Refund Inquiry") {
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
                    url: "http://www.boingo.com/wi-fi-customer-support-cancel/",
                    reply: ["Click on the link below and submit your ticket number"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Account Cancellation":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Account Cancellation") {
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
                    reply: ["Thank you, I can definitely help you out with Account Cancellation."],
                    response: "Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons: ["Recurring Wi-Fi Subscription", "Itunes Subscriptions", "AsYouGo Plans", "Broadband Wi-Fi Subscription"]
                }
            ];
        case "Recurring Wi-Fi Subscriptions":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Recurring Wi-Fi Subscriptions") {
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
                    reply: ["Subscriptions include: Boingo Mobile, Boingo Unlimited, Boingo Global, Boingo Europe Plus, Boingo UK & Ireland, and Boingo Asia Pacific.",
                        "Once you have logged in to “My Account“, on the left panel you will see the “Cancel Subscription” link. Follow this link to cancel the recurring monthly payment or to cancel the account completely"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Itunes Subscriptions":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Itunes Subscriptions") {
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
                    reply: ["Customers who signed up for Boingo from Boingo WiFinder on the iOS app store can cancel from their device via “Manage Subscription” in the iPhone/iPad Settings menu."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "AsYouGo Plans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "AsYouGo Plans") {
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
                    reply: ["Boingo AsYouGo and Hourly customers can stop charges by not logging in at hotspots."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Broadband Wi-Fi Subscriptions":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Broadband Wi-Fi Subscriptions") {
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
                    url: "http://www.boingo.com/deactivate/",
                    reply: ["If you are a Boingo Broadband customer please on the link below to deactivate your account."
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
        // case "Describe Problem":
        //     userResponse = null;
        //     customRequest = action.payload.tracker.latest_message.text;
        //     return [
        //         ...state,
        //         {
        //             userResponse: userResponse,
        //             customRequest: customRequest,
        //             reply: ["Your request has been submitted with ticket number " + v4()],
        //             response: "For other queries click on Main Menu.",
        //             url: null,
        //             buttons: ["Main Menu"]
        //         }
        //     ];

        default:
            return state;
    }
};

