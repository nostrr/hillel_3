import {useEffect, useState} from "react";
import {fetchPopularRepos} from "./api";
import {useSearchParams} from "react-router-dom";



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
        if (!showLoader) {
            setSelectedLanguage(language)
            searchParams.set('tab', language);
            window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        }
    }

    return (
        <div>
            <Tab selectedLanguage={selectedLanguage} onClickHandler={onClickHandler}/>
            {showLoader ? <Loader/>  : <RepList repos={repos}/>}
        </div>
    )
}

function Repository(props){
    return(
        <li className='popular-item'>
            <div className='popular-rank'>#{props.index + 1}</div>
            <ul>
                <li>
                    <img className='avatar' src={props.repo.owner.avatar_url} alt=''/>
                </li>
                <li>
                    <a href={props.repo.html_url} target='_blank'>{props.repo.name}</a>
                </li>
                <li>
                    @{props.repo.owner.login}
                </li>
                <li>
                    {props.repo.stargazers_count} stars
                </li>
            </ul>
        </li>
    )
}

function RepList(props){
   return(
       <ul className='popular-list'>
        {props.repos.map((repo, index) => (
           <Repository key={repo.id} index={index} repo={repo}/>
        ))}
    </ul>
   )
}

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python", "C#"];
function Tab(props){
    return(
    <ul className="languages">
        {languages.map((language, index) => (
            <li key={index}
                style={{color: language === props.selectedLanguage ? '#d0021b' : '#000000'}}
                onClick={() => props.onClickHandler(language)}>
                {language}
            </li>))}
    </ul>
    )
}

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader"/>
        </div>
    );
}

export default Popular;