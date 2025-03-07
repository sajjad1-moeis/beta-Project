import {lazy} from "react";

const Home = lazy(() => import("../pages/home"));

let routes = [{path: "/", element: <Home />}];

export default routes;
