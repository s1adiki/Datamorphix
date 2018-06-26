import {combineReducers} from "redux";
import {status} from "./status";
import {status_append} from "./status";
import {chatMessages} from "./chatMessages";

const reducers = combineReducers({
    status,
    chatMessages,
    status_append
});

export default reducers;