import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cleanPlayerData} from "../redux/battle.reducer";
import {FC, ReactElement} from "react";
import {RootState} from '../redux/store';



const Battle: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const playerData = useSelector((state: RootState) => state.battle.playerData);

    const handleReset = (id:string) => {
        dispatch(cleanPlayerData(id));
    }

    return (
        <div>
            <div className='row'>
                {!playerData.playerOneImage ?
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                    /> :
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        userName={playerData.playerOneName}
                    >
                        <button
                            className='reset'
                            onClick={() => handleReset('playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>
                }
                {!playerData.playerTwoImage ?
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                    /> :
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        userName={playerData.playerTwoName}
                    >
                        <button
                            className='reset'
                            onClick={() => handleReset('playerTwo')}>
                            Reset
                        </button>
                    </PlayerPreview>
                }
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage &&
                <Link className='button'
                      to={{
                          pathname: 'results',
                          search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                      }}>
                    Battle
                </Link>
            }
        </div>
    )
}

export default Battle;