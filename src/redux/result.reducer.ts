import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {startBattle, IStartBattleResult} from "./result.thunk";

interface IInitialState {
    winPlayer: any,
    losePlayer: any,
    error: any,
    showLoader: boolean | null
}

const initialState : IInitialState = {
    winPlayer: null,
    losePlayer: null,
    error: null,
    showLoader: true
}


const resultReducer:Slice<IInitialState> = createSlice({
    name: 'result',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(startBattle.pending, (state) => {
                state.showLoader = true;
                state.error = null;
            })
            .addCase(startBattle.fulfilled, (state, action:PayloadAction<IStartBattleResult | undefined>) => {
                state.winPlayer = action.payload?.players[0];
                state.losePlayer = action.payload?.players[1];
                state.showLoader = false
            })
            .addCase(startBattle.rejected, (state, action) => {
                state.showLoader = false;
                state.error = action.error;
            });
    }
});

export default resultReducer.reducer;
