import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {getRepos} from "./popular.thunk";

interface IPopularState {
    selectedLanguage: string;
    showLoader: boolean;
    repos: any[]; // Здесь следует указать более конкретный тип для `repos`
    error: string | null;
}

const initialState: IPopularState = {
    selectedLanguage: 'All',
    showLoader: false,
    repos: [],
    error: null
}

const popularSlice: Slice<IPopularState> = createSlice({
    name: 'popular',
    initialState: initialState,
    reducers: {
        setSelectedLanguage: (state, action: PayloadAction<string>) => {
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
                state.error = action.payload as string;
            });
    }
})

export default popularSlice.reducer;
export const {setSelectedLanguage} = popularSlice.actions;
