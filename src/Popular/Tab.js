import {setSelectedLanguage} from "../redux/popular.actions";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/popular.thunk";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python", "C#"];

export function Tab() {
    const [searchParams] = useSearchParams();
    const showLoader = useSelector((state) => state.popular.showLoader);
    const dispatch = useDispatch();
    const activeTabFromSearchParams = searchParams.get('tab');
    const selectedLanguage = useSelector((state) => state.popular.selectedLanguage);

    useEffect(() => {
        if (activeTabFromSearchParams) {
            dispatch(setSelectedLanguage(activeTabFromSearchParams));
        }
    }, [activeTabFromSearchParams]);

    useEffect(() => {
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    const onClickHandler = (language) => {
        if (!showLoader) {
            dispatch(setSelectedLanguage(language));
            searchParams.set('tab', language);
            window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        }
    }
    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={() => onClickHandler(language)}>
                    {language}
                </li>))}
        </ul>
    )
}