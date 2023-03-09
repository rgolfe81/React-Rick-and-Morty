import { createBrowserRouter } from "react-router-dom";
import { Add } from "../layout/add/add";
import { DetailView } from "../layout/detailView/DetailView";
import { Home } from "../layout/home/home";
import { List } from "../layout/list/ListCharacters";
import { Login } from "../layout/login/Login";
import { Register } from "../layout/register/Register";


export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/register",
        element: <Register/>
    },
    {
        path:"/list",
        element: <List/>
    },
    {
        path:"/add",
        element: <Add/>
    },
    {
        path:"/view",
        element: <DetailView/>
    }
    ]);