import { createBrowserRouter, RouteObject} from "react-router-dom";
import { pages } from "../pages";


const routes:RouteObject[] = [
    
    {path: "/", element: pages.home},
    {path: "/infoPage/:id", element: pages.info},
    {path: "/cart", element: pages.cart}
]

export const router= createBrowserRouter(routes)