import {fetchPopularRepos} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRepos = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage) =>  await fetchPopularRepos(selectedLanguage)
);