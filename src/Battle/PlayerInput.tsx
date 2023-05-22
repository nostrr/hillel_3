import {useDispatch, useSelector} from "react-redux";
import {setPlayerData, setPlayerDataNameTemp} from "../redux/battle.reducer";
import {ChangeEvent, FC, FormEvent, ReactElement} from "react";
import {RootState} from "../redux/store";

interface PlayerInputProps {
    id: 'playerOne' | 'playerTwo';//TODO как то заменить можно?
    label: string;
}

const PlayerInput: FC<PlayerInputProps> = ({id, label}) : ReactElement => {
    const dispatch = useDispatch();
    const tempName = useSelector((state: RootState) => state.battle.playerData[`${id}NameTemp`]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setPlayerData({
            id,
            userName: tempName
        }));
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPlayerDataNameTemp({id, userName: event.target.value}))
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
            <label htmlFor='userName' className='header'>{label}</label>
            <input
                id='userName'
                type='text'
                placeholder='Gith gub username'
                autoComplete='false'
                value={tempName}
                onChange={onChange}
            />
            <button className='button' type='submit' disabled={!tempName}>Submit</button>
        </form>
    )
};

export default PlayerInput