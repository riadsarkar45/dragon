import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Root from '../Root/Root';
import Dashboard from "../pages/Dashboard";
import AddNewOrder from "../pages/AddNewOrder";
import AllDyeingOrders from "../pages/AllDyeingOrders";
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
            ]
        }
    ]
)

export default Router