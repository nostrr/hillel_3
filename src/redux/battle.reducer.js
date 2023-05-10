const initialState = {
    playerData : {
        playerOneName: '',
        playerOneImage: null,
        playerOneNameTemp: '',
        playerTwoName: '',
        playerTwoImage: null,
        playerTwoNameTemp: '',
    }
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PLAYER_DATA':
            return {
                ...state,
                playerData:{...state.playerData,
                    [`${action.payload.id}Name`]: action.payload.userName,
                    [`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size=200`},
            };
        case 'CLEAN_PLAYER_DATA':
            return {
                ...state,
                playerData: {...state.playerData,[`${action.payload}Name`]: '', [`${action.payload}Image`]: null}
            }
        case 'SET_PLAYER_DATA_NAME_TEMP':
            return {
                ...state,
                playerData: {...state.playerData,
                    [`${action.payload.id}NameTemp`]: action.payload.userName
                }
            }
        default:
            return state;
    }
}