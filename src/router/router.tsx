import { createBrowserRouter, RouteObject} from "react-router-dom";
import { pages } from "../pages";


const routes:RouteObject[] = [
    
    {path: "/", element: pages.homePage},
    {path: "/infoPage/:id", element: pages.infoPage},
    {path: "/cart", element: pages.cartPage}
]

export const router= createBrowserRouter(routes)