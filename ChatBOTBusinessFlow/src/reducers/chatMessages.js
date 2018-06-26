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
                    reply: ["Hi! Welcome to Intellisoft Technologies! Here are some of the aspects I can help you out with Please click on any of the options below for more information about it If you want to come back to this menu please type at any point during the conversation"],
                    response: "What can I help you with today?",
                    buttons: ["About Intellisoft", "Services", "Contact Intellisoft", "Products and Solutions"]
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
                    buttons: ["About Intellisoft", "Services", "ContactUs", "Products and Solutions"]
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


        case "About Intellisoft":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "About Intellisoft") {
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
                    reply: ["Intellisoft Technologies Inc. was founded in 1997 to provide services in Information Technology, and for several years, we have expanded our horizon by adding Fortune 500 companies among our clients. Intellisoft is growing aggressively with an excellent team of consultants who provide our clients with unparalleled performance. Please Select the below options to know more about the firm."],
                    response: "For more information please choose a category",
                    buttons: ["Mission", "Why Intellisoft ?"]
                }
            ];
        case "Products and Solutions":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Products and Solutions") {
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
                    reply: ["Here are some of the Products and Solutions that have been developed by Intellisoft. Give a click on the option to know more about each one."],
                    response: "For more information please choose a category",
                    buttons: ["Big Data Platform", "ERP/Bussiness Applications", "Digital Commerce", "E-Learning", "Mobility", "Unified Communication"]
                }
            ];
        case "Mission":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Mission") {
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
                    reply: ["The Intellisoft team is fiercely dedicated to delivering results-oriented services to our clients. Our team of experts demonstrate the values that make our company reliable and dependable to provide meaningful solutions. All our offices are integrated to form an unique combination of skills and expertise in order to provide the best service."],
                    response: "For more information please choose a category",
                    buttons: ["Products and Solutions", "Main Menu"]
                }
            ];
        case "Big Data Platform":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Big Data Platform") {
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
                    url: "http://datamorphix.com/",
                    reply: ["Datamorphix - Ready to Use , No Frills , Low TCO and High ROI Big Data Platform for Advanced Analytics It Enables businesses embrace Big Data Platform and Solutions, with an easy to use, cost effective engagement model. Utilize your existing and unexplored new data sets to create analytics. Engage in proactive decision and policy-making directives to grow your business profitably. Harness the power of insights in an easily accessible comprehensive analytical dashboards."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "ERP/Business Applications":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "ERP/Business Applications") {
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
                    url: "https://www.hrchex.com/Default.aspx",
                    reply: ["At Intellisoft we create unique customizable solutions by partnering with Oracle.We use accelerators and customized tools for accurate project delivery and risk mitigation.We have a dedicated CoE to cater evolving technology requirements and assured quality delivery.Our Innovative delivery models and multiple modern pricing offer optimum customer satisfaction."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Digital Commerce":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Digital Commerce") {
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
                    url: "http://beta.comadre.com/",
                    reply: ["We help you move your product from the real to the virtual. With our solutions, boundaries will fade and markets will expand to unimaginable extents. Our clients partner with us to help integrate their existing retail into technology to help them reach their target market. We transform businesses with our efficient operations team. Our team knows the science of merchandising and uses the same to provide in-store experience to customers with accelerated innovative solutions. Comadre is one such application built to give latinas a fun,stylish and a easy place to shop and socialize."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "E-Learning":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "E-Learning") {
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
                    url: "https://www.edbrix.com/",
                    reply: ["Total academics management including course and faculty schedule, attendance record, course progress of students.We provide a JAVA based software that can adapt to your existing operating system, saving your time and a huge investment on software licensing. Our student and institute management software maintains student and operational records and allows easy and comprehensive management. The software can handle front office management, including enquiry, admission, receipt and payments.It also takes care of Accounts and Logistics Management, Online Examinations and Evaluation, Result Management, Library, Email Configuration, Time table management, IP based facility with conference integration."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Mobility":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Mobility") {
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
                    reply: ["Our services include creating, launching and maintaining mobile apps. This process includes mapping the current state of your IT environment, integrating a mobile environment after Strategizing, Developing based on specification and requirement, Testing, Publishing and Releasing."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Unified Communication":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Unified Communication") {
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
                    reply: ["Our VOIP communication system Orionox allows us to provide instant and world class communication solutions. We also provide enterprise level solutions in Telecommunications with in industry expertise in CRM, OSS and BSS systems. Our team has a vast experience in TIBCO, BEA, WSI and other web based methods. This equips Intellisoft to build architecturally sound platform for Telecommunications."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];

        case "Contact Intellisoft":
                    userResponse = null;
                    customRequest = null;
                    if (action.payload.tracker.latest_message.text === "Contact Intellisoft") {
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
                            reply: ["We have our offices located all across the globe. Please select the location mentioned below to get the physical address and telephone number of the business unit at the desired location."],
                            response: "Please select one of the following for more information",
                            buttons: ["Texas", "Memphis", "California", "Hyderabad", "Chennai", "Kolhapur"]
                        }
                    ];


        case "Texas":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Texas") {
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
                    reply: ["IntelliSoft Technologies, Inc. 1320 Green way Drive, STE 460, Irving, TX 75038. Phone : (972)756-1212 Toll Free : 1-888-456-3363 Fax : (972) 753-7856 Email ID : sales@datamorphix.com"],
                    response:null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Memphis":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Memphis") {
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
                    reply: ["IntelliSoft Technologies, Inc. 6000 Poplar Avenue, STE 250, Memphis, Tn 38119. Phone : (901)405-6699 Toll Free : 1-888-456-3363 Fax : (972) 753-7856 Email ID : sales@datamorphix.com"],
                    response: null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "California":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "California") {
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
                    reply: ["IntelliSoft Technologies, Inc. 691, South Milpitas, STE 210, Milpitas, CA 95035. Phone : (408)476-5443 Toll Free : 1-888-456-3363 Fax : (972) 753-7856 Email ID : sales@datamorphix.com"],
                    response: null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Hyderabad":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Hyderabad") {
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
                    reply: ["IntelliSoft Technologies, Inc. 307 KTC illumination, Gafoor Nagar, Image Hospital Road, Madhapur, Hyderabad 500081. Phone : 040-40172758  Email ID : sales@datamorphix.com"],
                    response: null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Chennai":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Chennai") {
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
                    reply: ["IntelliSoft Technologies, Inc. NSIC Software Technology Park, Suite #410, Section B24, Guindy Industrial Estate, Ekkaduthangal, Chennai - 600032. Phone : +91 44 22251250 EXT 766 Toll Free : 1-888-456-3363 Email ID : sales@datamorphix.com"],
                    response: null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Kolhapur":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Kolhapur") {
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
                    reply: ["IntelliSoft Technologies, Inc. STPI Incubation 'Neelgiri', Plot No:P-5, Opp. Jaiprabha Studio, Behind Yellamma Temple, IT Park, Kolhapur - 416012, Maharastra, India. Phone : + 91 9890383400 Email ID : sales@datamorphix.com"],
                    response: null,
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        

        case "Why Intellisoft ?":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Why Intellisoft ?") {
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
                    url: "https://www.verizonwireless.com/plans/verizon-plan/",
                    reply: ["Efficient, performance-driven and cost-effective technology infrastructure can be the differentiator that makes businesses hugely successful and enables them to focus more on their core services and products. We understand your business and help you revitalize your current processes with the help of technology. By putting together the right technical skills and management expertise coupled with agile development process, we are passionate about helping our clients in developing their software products efficiently and cost effectively within the Mobile, Analytics and Cloud and Enterprise software arena leveraging our broad technology expertise. We have stringent quality assurance processes in place to make sure we deliver the products of highest quality."],
                    response: "More can be found in the link below",
                    cardDetails:[{title:"One Line", imageURL:"https://goo.gl/Co3MCy", price:"$75.00/mo",info:"No Contract",rating:5, description:"Unlimited Data",feature:"Features", description2:"Unlimited Talk & Text", description1:"Unlimited 4G LTE data."}, {title:"Two Lines", imageURL:"https://goo.gl/Co3MCy", price:"$65.00/mo", info:"No Contract",rating:5, description:"Unlimited Data",feature:"Features", description2:"Unlimited Talk & Text", description1:"Unlimited 4G LTE data."}],

                    buttons: ["Products and Solutions", "Main Menu"]
                }
            ];




        case "Services":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Services") {
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
                    reply: ["Select the service about which you would like to know more information"],
                    response: "More can be found in the link below",
                    buttons: ["Application/Product development", "Big Data", "Bussiness Intelligence and Analytics", "Cloud", "Mobility", "ERP Consulting", "Salesforce", "Sharepoint", "Voice Over IP and Consulting"]
                }
            ];


        case "Application/Product Development":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Application/Product Development") {
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
                    reply: ["Our services include creating an architectural road map for new applications, designing and developing applications based on customized solutions which are directed towards your organization needs, Integrating your existing application with the advanced one, enhancing your existing applications to better meet the market and organization requirements. With relevant experience, tools and dedicated application models, we are in the position to help you with your technological endeavors across your organization.In this day and age, your application is your identity.That is where your customers find your services"],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Big Data":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Big Data") {
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
                    reply: ["Datamorphix - Ready to Use , No Frills , Low TCO and High ROI Big Data Platform for Advanced Analytics It Enables businesses embrace Big Data Platform and Solutions, with an easy to use, cost effective engagement model. Utilize your existing and unexplored new data sets to create analytics. Engage in proactive decision and policy-making directives to grow your business profitably. Harness the power of insights in an easily accessible comprehensive analytical dashboards."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Business Intelligence and Analytics":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Business Intelligence and Analytics") {
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
                    reply: ["Our BI Team delivers detailed business intelligence dashboards and balanced scorecards, as well as bespoke reports with textual and graphical representation of information using a variety of data visualization tools.Since everything is tuned to the business requirements, it helps in analyzing operational processes and corporate performance management issues in depth. We help you in architecting and implementing data warehouses and BI systems, process frameworks to get up and running with jump start analytical kits, to get insights from any business functions."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Cloud":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Cloud") {
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
                    reply: ["We at Intellisoft understand the need for data storage and integration. We also know the cost involved in and the tedious task of setting up and maintaining a server. We provide solution that contains the infrastructure, platform and applications that link remote services that integrate your data, software and computation, allowing your resources to be delivered over a network like the internet. We provide advantages to your enterprise such as : <ul> <li>Eliminating the need to host own server</li><li>Cost savings</li><li>Reduce the need for costly hardware</li><li>Access data remotely</li></ul>We have succeeded in transitioning many client's businesses to the AWS (Amazon Web Services) cloud. We are also constantly updating and providing services in the PAAS (Platform as a service) module."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "ERP Consulting":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "ERP Consulting") {
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
                    reply: ["Intellisoft delivers comprehensive Oracle application services covering versatile verticals such as Application Management, Consulting, Implementations, Support, Rollouts, Custom Developments, and Upgrades across prime industry segments.Our dynamic service portfolio covers broad-spectrum of Oracle services such as E-Business Suite, Engineered Systems, Fusion Applications, Cloud Applications, JD Edwards, Core Technology Services, Fusion Middleware, and much more.The Oracle expertise at Intellisoft has been designed to:<ul><li>Enrich Customer Experience</li><li>Improve Business Velocity</li><li>Develop Future Ready Systems</li></ul>Intellisoft works to build products with execution capabilities and deep competencies for our esteemed clients. Our Center of Excellence (CoE) and highly efficient Co-Innovation labs have enabled us in delivering value-added services that stand out."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];



        case "Salesforce":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Salesforce") {
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
                    reply: ["Branding, Marketing is one of the, if not the most important aspect of building a business. Our app design and development is state of the art in line with the real world technology and is tested and perfected before launch by our team of experts and it is equally crucial to select the right mode of marketing.We at Intellisoft are well versed with frameworks such Appcelarator and Xamarine."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Sharepoint":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Sharepoint") {
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
                    reply: ["A large technologically driven enterprise requires a large data sharing platform. Information at the right time in the right hands can make a world of difference to an organization. We make sure your information is stored and collaborated in a safe, secure and up to date environment. With Microsoft SharePoint, we help organization manage their data and strategize the ideal deployment framework so the information can be accessed by the right people at the right time. Our process includes a thorough examination of the existing system, plan based on shortfalls and requirements, migration of the organization to SharePoint in order to achieve maximum performance based service. We also help organizations with complete filtered migration."],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Voice Over IP and Consulting":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Voice Over IP and Consulting") {
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
                    reply: ["Communication has now evolved from data centric to voice through the introduction of VOIP (Voice over internet protocol).We deliver voice and data communications applications to our customers by giving access to these servers.A branch of communication is cloud telephony, which refers specifically and solely to voice communications. Intellisoft provides a hosting environment that is flexible, immediate, scale able, secure, and available – while saving enterprise’s money, time and resources."],
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

