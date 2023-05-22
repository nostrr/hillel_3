import {FC, ReactElement, ReactNode} from "react";

interface PlayerPreviewProps {
    avatar: string;
    userName: string;
    children: ReactNode;
}

const PlayerPreview: FC<PlayerPreviewProps>= ({avatar, userName, children}): ReactElement=> {
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