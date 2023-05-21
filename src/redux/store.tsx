import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from "redux-logger";
import popularReduce from './popular.reducer'
import battleReducer from "./battle.reducer";
import resultReducer from "./result.reducer";

const logger = createLogger({
    collapsed: true
})

const store = configureStore({
    reducer: {
        popular: popularReduce,
        battle: battleReducer,
        result: resultReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return  getDefaultMiddleware().concat(logger);
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;

