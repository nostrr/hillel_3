import {FC, ReactElement} from "react";
import {IPlayer} from "../api";


export const OtherInfo: FC<IPlayer> = ({profile, score}): ReactElement => {
    return (
        <div style={{textAlign: "center"}}>
            <ul>
                <li><b>Stars: {score}</b></li>
                <li>Name: {profile.name}</li>
                <li>Location: {profile.location}</li>
                <li>Company: {profile.company}</li>
                <li>Followers: {profile.followers}</li>
                <li>Following: {profile.following}</li>
                <li>Public repos: {profile.public_repos}</li>
                <li>Blog: {profile.blog}</li>
            </ul>
        </div>
    )
}