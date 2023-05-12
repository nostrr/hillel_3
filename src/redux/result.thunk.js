import {battle} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const startBattle = createAsyncThunk(
    'result/startBattle',
    async ([playerNameOne,playerNameTwo]) => {
        const players = await battle([playerNameOne, playerNameTwo]);
        if (players.length === 2) {
            return {players};
        }
    }
)