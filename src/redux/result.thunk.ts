import {battle, Player} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export interface StartBattleResult {
    players: Player[];
}

export const startBattle = createAsyncThunk(
    'result/startBattle',
    async ([playerNameOne, playerNameTwo]: string[]): Promise<StartBattleResult | undefined> => {
        const players: Player[] | undefined = await battle([playerNameOne, playerNameTwo]);
        if (players?.length == 2) {
            return {players};
        }
    }
)