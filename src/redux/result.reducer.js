const initialState = {
    winPlayer: null,
    losePlayer: null,
    error: null,
    showLoader: true
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOAD_PLAYER':
            return {
                ...state,
                winPlayer: action.payload.players[0],
                losePlayer: action.payload.players[1],
                showLoader: false
            };
        case 'THROW_ERROR':
            return {
                ...state,
                error: action.payload.error,
                showLoader: false
            }
        default:
            return state;
    }
}