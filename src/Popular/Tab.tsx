import {setSelectedLanguage} from "../redux/popular.reducer";
import {useSearchParams} from "react-router-dom";
import {Dispatch, FC, ReactElement, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/popular.thunk";
import {RootState} from '../redux/store';

const languages: string[] = ["All", "Javascript", "Ruby", "Java", "CSS", "Python", "C#"];

export const Tab: FC = (): ReactElement => {
    const [searchParams] = useSearchParams();
    const showLoader: boolean = useSelector((state: RootState) => state.popular.showLoader);
    const dispatch: Dispatch<any> = useDispatch(); //TODO Убрать эни.
    const activeTabFromSearchParams = searchParams.get('tab');
    const selectedLanguage: string = useSelector((state: RootState) => state.popular.selectedLanguage);

    useEffect(() => {
        if (activeTabFromSearchParams) {
            dispatch(setSelectedLanguage(activeTabFromSearchParams));
        }
    }, [activeTabFromSearchParams]);

    useEffect(() => {
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    const onClickHandler = (language: string) => {
        if (!showLoader) {
            dispatch(setSelectedLanguage(language));
            searchParams.set('tab', language);
            window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        }
    }
    return (
        <ul className="languages">
            {languages.map((language: string, index: number) => (
                <li key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={() => onClickHandler(language)}>
                    {language}
                </li>))}
        </ul>
    )
}