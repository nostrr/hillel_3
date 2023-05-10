export const setLoadPlayer = (payload) => ({
    type: 'SET_LOAD_PLAYER',
    payload
});

export const setShowLoader = (payload) => ({
    type: 'SET_SHOW_LOADER',
    payload
})

export const throwError = (payload) =>({
    type: 'THROW_ERROR',
    payload
})