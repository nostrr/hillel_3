import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

// const initialState = {
//     playerData: {
//         playerOneName: '',
//         playerOneImage: null,
//         playerOneNameTemp: '',
//         playerTwoName: '',
//         playerTwoImage: null,
//         playerTwoNameTemp: '',
//     }
// }

interface IPlayerData {
    playerOneName: string;
    playerOneImage: null | string;
    playerOneNameTemp: string;
    playerTwoName: string;
    playerTwoImage: null | string;
    playerTwoNameTemp: string;
}

interface IInitialState {
    playerData: IPlayerData;
}

const initialState: IInitialState = {
    playerData: {
        playerOneName: '',
        playerOneImage: null,
        playerOneNameTemp: '',
        playerTwoName: '',
        playerTwoImage: null,
        playerTwoNameTemp: '',
    }
}

const battleSlice: Slice<IInitialState> = createSlice({
    name: 'battle',
    initialState: initialState,
    reducers: {
        setPlayerData: (state: IInitialState, action: PayloadAction<{
            id: 'playerOne' | 'playerTwo' ,
            userName: string
        }>): void => {
            state.playerData[`${action.payload.id}Name`] = action.payload.userName;
            state.playerData[`${action.payload.id}Image`] = `https://github.com/${action.payload.userName}.png?size=200`
        },
        cleanPlayerData: (state: IInitialState, action: PayloadAction<'playerOne' | 'playerTwo'>): void => {
            state.playerData[`${action.payload}Name`] = '';
            state.playerData[`${action.payload}Image`] = null;
        },
        setPlayerDataNameTemp: (state: IInitialState, action: PayloadAction<{
            id: 'playerOne' | 'playerTwo',
            userName: string
        }>): void => {
            state.playerData[`${action.payload.id}NameTemp`] = action.payload.userName;
        }
    }
})


export default battleSlice.reducer;
export const {setPlayerData, cleanPlayerData, setPlayerDataNameTemp} = battleSlice.actions;
