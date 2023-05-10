import {fetchPopularRepos} from "../api";
import {setError, setRepos, setShowLoader} from "../redux/popular.actions";

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(setShowLoader())
    fetchPopularRepos(selectedLanguage)
        .then(data => {
            dispatch(setRepos(data));
        })
        .catch(error => {
            dispatch(setError(error.message));
        })
        .finally(() => {
        })
}