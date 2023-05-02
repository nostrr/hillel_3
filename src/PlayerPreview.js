const PlayerPreview = ({avatar, userName, children}) => {
    return (
        <div>
            <div className='column'>
                <h2 className='userName'>{userName}</h2>
                <img className='avatar' src={avatar} alt='Avatar'/>
            </div>
            {children}
        </div>
    );
}

export default PlayerPreview;