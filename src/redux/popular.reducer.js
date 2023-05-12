import {POPULAR_ENTITY} from "./popular.actions";


const initialState = {
    selectedLanguage: 'All',
    showLoader: false,
    repos: [],
    error: null
}

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_ENTITY.SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            };
        case POPULAR_ENTITY.SET_REPOS:
            return {
                ...state,
                repos: action.payload,
                showLoader: false,
            };
        case POPULAR_ENTITY.SET_SHOW_LOADER:
            return {
                ...state,
                showLoader: true,
                error: null
            };
        case POPULAR_ENTITY.SET_ERROR:
            return {
                ...state,
                showLoader: false,
                error: action.payload
            }
        default:
            return state;
    }
}