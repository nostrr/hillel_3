import {Repository} from "./Repository";
import {useSelector} from "react-redux";
import {RootState} from '../redux/store';
import {FC, ReactElement} from "react";
import {RepoData} from "../api";

export const RepList: FC = (): ReactElement => {
    const repos: RepoData[] = useSelector((state: RootState): RepoData[] => state.popular.repos);

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => (
                <Repository key={repo.id} index={index} repo={repo}/>
            ))}
        </ul>
    )
}