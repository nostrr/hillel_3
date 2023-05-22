import {Repository} from "./Repository";
import {useSelector} from "react-redux";
import {RootState} from '../redux/store';
import {FC, ReactElement} from "react";
import {IRepoData} from "../api";

export const RepList: FC = (): ReactElement => {
    const repos: IRepoData[] = useSelector((state: RootState): IRepoData[] => state.popular.repos);

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => (
                <Repository key={repo.id} index={index} repo={repo}/>
            ))}
        </ul>
    )
}