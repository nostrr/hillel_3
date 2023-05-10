import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  MyApp from './ExcludedComponentsFromTheBattle/MyApp';
import reportWebVitals from './reportWebVitals';
import {List} from "./ExcludedComponentsFromTheBattle/List";
import {Form} from "./ExcludedComponentsFromTheBattle/MyForm";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {Loader} from "./Loader";