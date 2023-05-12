import {createSlice} from "@reduxjs/toolkit";
import {getRepos} from "./popular.thunk";


const initialState = {
    selectedLanguage: 'All',
    showLoader: false,
    repos: [],
    error: null
}

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        setSelectedLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRepos.pending, (state) => {
                state.showLoader = true;
                state.error = null;
            })
            .addCase(getRepos.fulfilled, (state, action) => {
                state.repos = action.payload;
                state.showLoader = false;
            })
            .addCase(getRepos.rejected, (state, action) => {
                state.showLoader = false;
                state.error = action.payload;
            });
    }
})

export default popularSlice.reducer;
export const {setSelectedLanguage} = popularSlice.actions;
