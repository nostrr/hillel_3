import {createSlice} from "@reduxjs/toolkit";
import {startBattle} from "./result.thunk";

const initialState = {
    winPlayer: null,
    losePlayer: null,
    error: null,
    showLoader: true
}

const resultReducer = createSlice({
    name: 'result',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(startBattle.pending, (state) => {
                state.showLoader = true;
                state.error = null;
            })
            .addCase(startBattle.fulfilled, (state, action) => {
                state.winPlayer = action.payload.players[0];
                state.losePlayer = action.payload.players[1];
                state.showLoader = false
            })
            .addCase(startBattle.rejected, (state, action) => {
                state.showLoader = false;
                state.error = action.error;
            });
    }
});

export default resultReducer.reducer;
