import {combineReducers} from "redux";
import {botReducer} from "./botReducer";
import {chatOpenReducer} from "./chatOpenReducer"


export const reducer = combineReducers({
    botReducer,
    chatOpenReducer
});

