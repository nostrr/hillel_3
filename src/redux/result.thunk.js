import {battle} from "../api";
import {setLoadPlayer, setShowLoader, throwError} from "./result.actions";

export const  startBattle =(playerNameOne, playerNameTwo) => async (dispatch)=>{
    dispatch(setShowLoader());
    try {
        const players = await battle([playerNameOne, playerNameTwo]);
        if (players.length == 2) {
            dispatch(setLoadPlayer({players}))
        }
    } catch (error) {
        console.log(error);
        dispatch(throwError({error}))
    }
}