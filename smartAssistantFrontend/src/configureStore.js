import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash/throttle';

const configureStore = () =>{
    //const persistentState = loadState();
    const persistentState = {};
    const middleware = applyMiddleware(logger, thunk, promise());
    const store = createStore(reducer, persistentState, middleware);

    store.subscribe(throttle(() =>{
        saveState({
            chatOpenReducer : store.getState().chatOpenReducer,
            botReducer: store.getState().botReducer

        });
    }, 1000));

    return(store);
};

export default configureStore;
