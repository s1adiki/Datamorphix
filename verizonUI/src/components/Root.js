import React from "react";
import {Provider} from "react-redux";
import Layout from "./Layout";

const Root = ({store}) =>(
    <Provider store={store}>
        <Layout/>
    </Provider>
);

export default Root;