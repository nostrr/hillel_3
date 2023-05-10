import {combineReducers} from "redux";
import {popularReducer} from "./popular.reducer";
import {battleReducer} from "./battle.reducer";
import {resultReducer} from "./result.reducer";

export default combineReducers({
    popular: popularReducer,
    battle: battleReducer,
    result: resultReducer
})