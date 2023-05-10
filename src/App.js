import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Nav from "./Nav";
import Results from "./Result";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Nav/>
        </div>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path:"/popular",
                element:<Popular/>
            },
            {
                path:"/battle",
                element:<Battle/>
            },
            {
                path:"/battle/results",
                element:<Results/>
            },
            {
                path:"*",
                element:<h2>Error...</h2>
           }
        ]
    },

])

const App=() => <RouterProvider router={router}/>

export default App;