import {fetchPopularRepos, RepoData} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRepos = createAsyncThunk<RepoData[],string>(
    'popular/getRepos',
    async (selectedLanguage: string) =>  await fetchPopularRepos(selectedLanguage)
);