import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/layout/layoutSlice";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleSidebar } from "../features/layout/layoutSlice";
// import {  useLocation } from "react-router-dom";
import MenuData from "./navbar-data/navMenuData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
// import { useEffect } from "react";

import logo from "../assets/logo.png";

const Sidebar = () => {
  // const navigate = useNavigate();

  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();

  const location = useLocation();

  const currentPath = location?.pathname.slice(1) || location;

  const handleSidebar = () => {
    // handle through redux
    dispatch(toggleSidebar());
  };
  const menuData = MenuData().props.children || [];
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    dispatch(userLoggedOut());
    navigate("/login");
  };

  return (
    <React.Fragment>
      <button
        className=" absolute top-6 left-8 block lg:hidden text-white z-50"
        onClick={handleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          color="#fff"
        >
          <path
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h18M3 12h18M3 19h18"
          ></path>
        </svg>
      </button>
      <div
        className={`bg-[#01108D]  w-[250px] top-0 absolute lg:fixed  z-[1010] h-screen -left-full lg:left-0 ${
          isSidebarOpen ? "left-0" : ""
        } 
        transition-all duration-300 ease-in-out  } `}
      >
        <img src={logo} className="mt-10 w-4/6 mx-auto" alt="" />
        <ul className="mt-6">
          {menuData.map((item) => {
            return (
              <li
                className={`my-2 font-Dm text-lg py-1.5 flex items-center ${
                  currentPath === item.id
                    ? "bg-[#3637EA] text-white"
                    : "text-[#949BAD]"
                }`}
                key={item.id}
                onClick={() => {
                  item.click();
                }}
              >
                <Link
                  to={item.link}
                  className="flex items-center  hover:text-gray-200 px-6 ms-2"
                >
                  {
                    item.icon && item.icon
                    // <img src={item.icon} alt="" className="w-4 h-4" />
                  }
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="my-2 ms-2 px-6 py-2 flex items-center absolute bottom-8 cursor-pointer"
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#fff"
          >
            <path
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12h7m0 0-3 3m3-3-3-3M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
            ></path>
          </svg>
          <button className=" text-white hover:text-gray-200  ml-2">
            logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
