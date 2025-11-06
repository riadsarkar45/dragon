import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="flex w-[100%] min-h-screen">
            <Sidebar className="sidebar" />
            <main className="main-content w-full ">

                <Outlet />
            </main>
        </div>
    );
};

export default Root;