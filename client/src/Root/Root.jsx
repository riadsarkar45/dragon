import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="flex">
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Main content takes remaining space and scrolls */}
      <main className="ml-72 w-full h-screen overflow-y-auto p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
