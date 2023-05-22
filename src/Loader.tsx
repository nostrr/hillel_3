import {FC, ReactElement} from "react";

export const Loader: FC =() : ReactElement =>{
    return (
        <div className="loader-container">
            <div className="loader"/>
        </div>
    );
}

