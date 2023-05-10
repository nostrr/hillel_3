import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import './Results.css'
import {battle} from "../api";
import {Loader} from "../Loader";
import {ResultPanel} from "./ResultPanel";

const Results = () => {
    const [searchParams] = useSearchParams();
    const [winPlayer, setWinPlayer] = useState(null);
    const [losePlayer, setLosePlayer] = useState(null);
    const [error, setError] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const playerNameOne = searchParams.get('playerOneName');
    const playerNameTwo = searchParams.get('playerTwoName');

    useEffect(() => {
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

export default Results;