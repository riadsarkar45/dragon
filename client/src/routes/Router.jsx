import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Root from '../Root/Root';
import Dashboard from "../pages/Dashboard";
import AddNewOrder from "../pages/AddNewOrder";
import AllDyeingOrders from "../pages/AllDyeingOrders";
import RawReport from "../pages/RawReport";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NewYarnShipped from "../pages/NewYarnShipped";
import MarketingWiseReport from "../pages/MarketingWiseReport";
const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,

            children: [
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: '/neworder',
                    element: <AddNewOrder />
                },
                {
                    path: '/allorders',
                    element: <AllDyeingOrders />
                },
                {
                    path: '/rawreport',
                    element: <RawReport />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/newshipped',
                    element: <NewYarnShipped />
                },
                {
                    path: "/marketing",
                    element: <MarketingWiseReport />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ]
)

export default Router