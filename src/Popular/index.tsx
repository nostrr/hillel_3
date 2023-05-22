import {useSelector} from "react-redux";
import {Tab} from "./Tab";
import {RepList} from "./RepList";
import {Loader} from "../Loader";
import {RootState} from '../redux/store';
import {FC, ReactElement} from "react";


const Popular: FC = (): ReactElement => {
    const showLoader: boolean = useSelector((state: RootState) => state.popular.showLoader);
    return (
        <div>
            <Tab/>
            {showLoader ? <Loader/> : <RepList/>}
        </div>
    )
}

export default Popular;