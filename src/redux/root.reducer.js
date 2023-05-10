import {combineReducers} from "redux";
import {popularReducer} from "./popular.reducer";
import {battleReducer} from "./battle.reducer";

export default combineReducers({
    popular: popularReducer,
    battle: battleReducer
})