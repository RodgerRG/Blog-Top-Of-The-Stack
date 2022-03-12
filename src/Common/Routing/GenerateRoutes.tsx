import { Route } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { RouteComponentProps } from "./RouteComponent";

const routes : RouteComponentProps[] = [
    {
        path: "/",
        element: <Home />
    }
]

const generateRoutes = () => {
    return routes.map(route => {
        return <Route path={route.path} element={route.element} key={`route-${route.path}`}/>
    })
}

export { generateRoutes };