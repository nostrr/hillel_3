import {useEffect, useState} from "react";
import {fetchPopularRepos} from "./api";
import {useSearchParams} from "react-router-dom";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python", "C#"];

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [repos, setRepos] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [searchParams] = useSearchParams();
    const activeTabFromSearchParams = searchParams.get('tab');

    useEffect(() => {
        setShowLoader(true);
        fetchPopularRepos(selectedLanguage)
            .then(data => {
                setRepos(data);
            }).finally(() => {
            setShowLoader(false);
        })
    }, [selectedLanguage]);

    useEffect(() => {
        if (activeTabFromSearchParams) {
            setSelectedLanguage(activeTabFromSearchParams);
        }
    }, [activeTabFromSearchParams]);

    const onClickHandler = (language) => {
        searchParams.set('tab', language);
        window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        return showLoader ? null : setSelectedLanguage(language)
    }

    return (
        <>
            {showLoader ? (<div>Loading....</div>)
                :
                (<div>
                    <ul className="languages">
                        {languages.map((language, index) => (
                            <li key={index}
                                style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                                onClick={() => onClickHandler(language)}>
                                {language}
                            </li>))}
                    </ul>
                    <ul className='popular-list'>
                        {repos.map((repo, index) => {
                            return (
                                <div key={repo.id}>
                                    <li className='popular-item'>
                                        <div className='popular-rank'>#{index + 1}</div>
                                        <ul>
                                            <li>
                                                <img className='avatar' src={repo.owner.avatar_url} alt=''/>
                                            </li>
                                            <li>
                                                <a href={repo.html_url} target='_blank'>{repo.name}</a>
                                            </li>
                                            <li>
                                                @{repo.owner.login}
                                            </li>
                                            <li>
                                                {repo.stargazers_count} starts
                                            </li>
                                        </ul>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>)}
        </>
    )

}

export default Popular;