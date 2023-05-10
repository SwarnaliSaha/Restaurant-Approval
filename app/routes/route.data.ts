import { Route,Routes } from "./route.type";
import Routers from "../feature-modules/index"
import { ExcludedPaths,ExcludedPath } from "../utility/middlewares/middlewares";

export const routes : Routes =[
    new Route("/users",Routers.userRouter),
    new Route("/auth",Routers.authRouter),
    new Route("/role",Routers.roleRouter)
];

export const excludedPaths: ExcludedPaths = [
    new ExcludedPath("/auth/Register","POST"),
    new ExcludedPath("/auth/Login", "POST")
];