import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playerData: {
        playerOneName: '',
        playerOneImage: null,
        playerOneNameTemp: '',
        playerTwoName: '',
        playerTwoImage: null,
        playerTwoNameTemp: '',
    }
}


const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setPlayerData: (state, action) => {
            state.playerData[`${action.payload.id}Name`] = action.payload.userName;
            state.playerData[`${action.payload.id}Image`] = `https://github.com/${action.payload.userName}.png?size=200`
        },
        cleanPlayerData: (state, action) => {
            state.playerData[`${action.payload}Name`] = '';
            state.playerData[`${action.payload}Image`] = null;
        },
        setPlayerDataNameTemp: (state, action) => {
            state.playerData[`${action.payload.id}NameTemp`] = action.payload.userName;
        }
    }
})


export default battleSlice.reducer;
export const {setPlayerData, cleanPlayerData, setPlayerDataNameTemp} = battleSlice.actions;
