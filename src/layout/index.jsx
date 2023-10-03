// import React from 'react';

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/layout/layoutSlice";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();
  const handleNavClose = () => {
    if (!isSidebarOpen) return;
    dispatch(toggleSidebar());
  };
  return (
    <div className="none lg:block font-poppins ">
      <Sidebar />
      <div className=" lg:ml-[250px] ml-0 grow ">
        <div
          onClick={handleNavClose}
          className={`px-12 lg:px-10 pt-20 pb-12 lg:py-8 xl:px-12  min-h-screen bg-[#191919] text-white ${
            isSidebarOpen ? "fixed inset-0 bg-[#191919] opacity-95  z-50" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
