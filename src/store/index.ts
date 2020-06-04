import reducer from './modules';
import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";


const initStore = () => {
    return configureStore({
        reducer,
        middleware: [thunk]
    });
};

export default initStore;