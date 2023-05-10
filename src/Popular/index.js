import {useDispatch, useSelector} from "react-redux";
import {Tab} from "./Tab";
import {RepList} from "./RepList";
import {Loader} from "../Loader";


const Popular = () => {
    const dispatch = useDispatch();
    const showLoader = useSelector((state) => state.popular.showLoader);
    return (
        <div>
            <Tab/>
            {showLoader ? <Loader/> : <RepList/>}
        </div>
    )
}

export default Popular;