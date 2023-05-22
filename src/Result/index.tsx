import {Dispatch, FC, ReactElement, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import './Results.css'
import {Loader} from "../Loader";
import {ResultPanel} from "./ResultPanel";
import {useDispatch, useSelector} from "react-redux";
import {startBattle} from "../redux/result.thunk";
import {RootState} from "../redux/store";


const Results: FC = (): ReactElement => {
    const [searchParams] = useSearchParams();
    const playerNameOne: string | null = searchParams.get('playerOneName');
    const playerNameTwo: string | null = searchParams.get('playerTwoName');
    const dispatch: Dispatch<any> = useDispatch();
    const error = useSelector((state: RootState) => state.result.error);
    const showLoader = useSelector((state: RootState) => state.result.showLoader);

    useEffect(() => {
        if (playerNameOne && playerNameTwo) {
            dispatch(startBattle([playerNameOne, playerNameTwo]));//TODO 123
        }
    }, []);

    const contentOrError = (errorMessage: Error | null): ReactElement => {
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