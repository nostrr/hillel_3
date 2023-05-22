import PlayerPreview from "../Battle/PlayerPreview";
import {OtherInfo} from "./OtherInfo";
import {useSelector} from "react-redux";
import {CSSProperties, FC, ReactElement} from "react";
import {RootState} from "../redux/store";
import {IPlayer} from "../api";

interface IResultPanelProps {
    result: string;
}

export const ResultPanel: FC<IResultPanelProps> = ({result}): ReactElement => {
    const player: IPlayer = useSelector((state: RootState) => result === 'Winner' ? state.result.winPlayer : state.result.losePlayer);
    const textColorStyle:CSSProperties  = {
        color: result === 'Winner' ? 'green' : 'red',
        textAlign: 'center'
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