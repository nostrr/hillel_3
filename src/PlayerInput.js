import {useState} from "react";

const PlayerInput = ({id, label, onSubmit}) =>{
    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, userName);
    }
    return(
        <form className='column' onSubmit={handleSubmit}>
            <label htmlFor='userName' className='header'>{label}</label>
            <input
                id='userName'
                type='text'
                placeholder='Gith gub username'
                autoComplete='false'
                value = {userName}
                onChange={(event)=> setUserName(event.target.value)}
            />
            <button className='button' type='submit' disabled={!userName}>Submit</button>
        </form>
    )
};

export default PlayerInput