import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import './Results.css'
import {Loader} from "../Loader";
import {ResultPanel} from "./ResultPanel";
import {useDispatch, useSelector} from "react-redux";
import {startBattle} from "../redux/result.thunk";

const Results = () => {
    const [searchParams] = useSearchParams();
    const playerNameOne = searchParams.get('playerOneName');
    const playerNameTwo = searchParams.get('playerTwoName');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.result.error);
    const showLoader = useSelector((state) => state.result.showLoader);

    useEffect(() => {
        dispatch(startBattle(playerNameOne, playerNameTwo));
    }, []);

    const contentOrError = (errorMessage) => {
        if (errorMessage) {
            return (<div>{errorMessage.message}</div>)
        }
        return (
            showLoader ? <Loader/> :
                <>
                    <ResultPanel result='Winner'/>
                    <ResultPanel result='Loser'/>
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