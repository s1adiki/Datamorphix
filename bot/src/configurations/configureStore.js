import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers/index";

const configureStore = () => {
    const persistentState = {};
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleWare = composeEnhancers(applyMiddleware(logger, thunk, promise()));
    return createStore(reducers,persistentState, middleWare);
};

export default configureStore;