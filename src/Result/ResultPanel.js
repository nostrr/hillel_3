import PlayerPreview from "../Battle/PlayerPreview";
import {OtherInfo} from "./OtherInfo";

export function ResultPanel({result, player}) {
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