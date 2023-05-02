import axios from "axios";

const handleError = (error) => console.error(error);


const getProfile = async (userName) => {
    try {
        const response = await axios.get(`http://api.github.com/users/${userName}`)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        handleError(error);
        throw error;
    }
}

const getRepos = async (userName) => {
    try {
        const response = await axios.get(`http://api.github.com/users/${userName}/repos?per_page=100`)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        handleError(error);
        throw error;
    }
}

const getStartCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
}

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStartCount(repos);

    return followers * totalStars;
}

const getUserData = async (userName) => {
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
    } catch (error) {
        handleError(error);
        throw error;
    }
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const battle = async (players) => {
    try {
        const battleResult = await Promise.all(players.map(getUserData));

        if (battleResult) {
            return sortPlayers(battleResult);
        }
    } catch (error) {
        throw error;
    }
}

export const fetchPopularRepos = (language) => {
    const encodingURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=starts&order=desc&type=Repositories`);
    return axios.get(encodingURI)
        .then(response => response.data.items)
        .catch(handleError);
}