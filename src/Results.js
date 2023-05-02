import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import './Results.css'
import {battle} from "./api";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
    const [searchParams] = useSearchParams();
    const [winPlayer, setWinPlayer] = useState(null);
    const [losePlayer, setLosePlayer] = useState(null);
    const [error, setError] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const playerNameOne = searchParams.get('playerOneName');
    const playerNameTwo = searchParams.get('playerTwoName');

    useEffect(async() => {
        const getBattleResult = async () => {
            try {
                const players = await battle([playerNameOne, playerNameTwo]);
                if (players.length == 2) {
                    setShowLoader(false);
                    setWinPlayer(players[0]);
                    setLosePlayer(players[1]);
                }
            } catch (error) {
                console.log(error);
                setError(error);
                setShowLoader(false);
            }
        }
        getBattleResult();


    }, []);

    const contentOrError = (errorMessage) => {
        if (errorMessage) {
            return (<div>{errorMessage.message}</div>)
        }
        return (
            showLoader ? <Loader/> :
                <>
                    <ResultPanel result='Winner' player={winPlayer}/>
                    <ResultPanel result='Loser' player={losePlayer}/>
                </>
        )
    }

    return (
        <div className='flex-container'>
            {contentOrError(error)}
        </div>
    )
}

function ResultPanel({result, player}) {
    const textColorStyle = {
        color: result == 'Winner' ? 'green' : 'red',
        textAlign: "center"
    };
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h2 style={textColorStyle}>{result}</h2>
            <PlayerPreview avatar={player ? player.profile.avatar_url : ''}
                           userName={player ? player.profile.login : ''}>
                <OtherInfo profile={player.profile} score={player.score}/>
            </PlayerPreview>
        </div>
    )
}

function OtherInfo({profile, score}) {
    return (
        <div style={{textAlign: "center"}}>
            <ul>
                <li><b>Stars: {score}</b></li>
                <li>Name: {profile.name}</li>
                <li>Location: {profile.location}</li>
                <li>Company: {profile.company}</li>
                <li>Followers: {profile.followers}</li>
                <li>Following: {profile.following}</li>
                <li>Public repos: {profile.public_repos}</li>
                <li>Blog: {profile.blog}</li>
            </ul>
        </div>
    )
}

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader"/>
        </div>
    );
}

export default Results;