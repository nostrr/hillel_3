import {fetchPopularRepos, IRepoData} from "../api";
import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";

export const getRepos: AsyncThunk<IRepoData[], string, {}> = createAsyncThunk<IRepoData[], string>(
    'popular/getRepos',
    async (selectedLanguage: string): Promise<IRepoData[]> => await fetchPopularRepos(selectedLanguage)
);
