import axios from "axios";

const handleError = (error) => console.error(error);
export const fetchPopularRepos = (language) =>{
    const encodingURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=starts&order=desc&type=Repositories`);
    return axios.get(encodingURI)
        .then(response => response.data.items)
        .catch(handleError);
}