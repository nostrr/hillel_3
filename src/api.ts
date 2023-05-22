import axios, {AxiosResponse} from "axios";

const handleError = (error: Error) => console.error(error);

export interface RepoData {
    id: number;
    name: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    stargazers_count: number;
}


const getProfile: any = async (userName: string) => {
    try {
        const response: AxiosResponse<any> = await axios.get(`http://api.github.com/users/${userName}`)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error: any) {
        handleError(error);
        throw error;
    }
}

const getRepos = async (userName: string) => {
    try {
        const response = await axios.get(`http://api.github.com/users/${userName}/repos?per_page=100`)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error: any) {
        handleError(error);
        throw error;
    }
}

const getStartCount = (repos: any[]) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
}

const calculateScore = (profile: any, repos: any[]) => {
    const followers = profile.followers;
    const totalStars = getStartCount(repos);

    return followers * totalStars;
}
// TODO После if нету ретурна выдает ошибку если не поставить эни, как грамотно написать?
const getUserData = async (userName: string): Promise<any> => {
    try {
        const [profile, repos] = await Promise.all([
            getProfile(userName),
            getRepos((userName))
        ]);
        if (profile && repos) {
            return {
                profile,
                score: calculateScore(profile, repos)
            }
        }
    } catch (error: any) {
        handleError(error);
        throw error;
    }
}

export interface Player {
    profile: {
        avatar_url: string;
        login: string;
        name: string;
        location: string;
        company: string;
        followers: number;
        following: number;
        public_repos: number;
        blog: string;
    };
    score: number;
}


const sortPlayers = (players: Player[]) => players.sort((a: Player, b: Player) => b.score - a.score);

export const battle = async (players: string[]):Promise<Player[] | undefined> => {
    try {
        const battleResult: Player[] = await Promise.all(players.map(getUserData));

        if (battleResult) {
            return sortPlayers(battleResult);
        }
    } catch (error) {
        throw error;
    }
}

export const fetchPopularRepos = (language: string): Promise<RepoData[]> => {
    const encodingURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=starts&order=desc&type=Repositories`);
    return axios.get(encodingURI)
        .then((response: AxiosResponse<any>) => response.data.items)
        .catch(handleError);
}