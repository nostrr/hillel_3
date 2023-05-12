import {useDispatch, useSelector} from "react-redux";
import {setPlayerData, setPlayerDataNameTemp} from "../redux/battle.reducer";

const PlayerInput = ({id, label}) => {
    const dispatch = useDispatch();
    const tempName = useSelector((state) => state.battle.playerData[id + 'NameTemp']);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPlayerData({
            id,
            userName: tempName
        }));
    }
    const onChange = (event) => {
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