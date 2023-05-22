import {fetchPopularRepos, RepoData} from "../api";
import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";

export const getRepos: AsyncThunk<RepoData[], string, {}> = createAsyncThunk<RepoData[], string>(
    'popular/getRepos',
    async (selectedLanguage: string): Promise<RepoData[]> => await fetchPopularRepos(selectedLanguage)
);
