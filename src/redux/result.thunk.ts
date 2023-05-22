import {battle, IPlayer} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export interface IStartBattleResult {
    players: IPlayer[];
}

export const startBattle = createAsyncThunk(
    'result/startBattle',
    async ([playerNameOne, playerNameTwo]: string[]): Promise<IStartBattleResult | undefined> => {
        const players: IPlayer[] | undefined = await battle([playerNameOne, playerNameTwo]);
        if (players?.length == 2) {
            return {players};
        }
    }
)