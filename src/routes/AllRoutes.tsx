import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
// import HomePageLayout from "../layout/homeLayout/HomePageLayout";

const HomePageLayout = lazy(() => import("../layout/homeLayout/HomePageLayout"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
])

