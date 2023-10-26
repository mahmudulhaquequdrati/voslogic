import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/layout/layoutSlice";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleSidebar } from "../features/layout/layoutSlice";
// import {  useLocation } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
import MenuData from "./navbar-data/navMenuData";
// import { useEffect } from "react";

import logo from "../assets/logo.png";
import sidebarUser from "../assets/sidebar-user.png";
import {
  switchToAgent,
  switchToDepartment,
} from "../features/switchAgent/switchAgent";

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

  useEffect(() => {
    if (currentPath === "agents") {
      dispatch(switchToAgent());
    } else if (currentPath === "department") {
      dispatch(switchToDepartment());
    }
  });
  const [childrenView, setChildrenView] = useState(false);
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
        {/* top Nav Items */}
        <ul className="mt-6">
          {menuData.map((item) => {
            if (item?.children) {
              return (
                <>
                  <li
                    onClick={() => setChildrenView(!childrenView)}
                    className="text-white cursor-pointer hover:text-gray-200 px-6 ms-[10px] mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {item.icon && item.icon}
                        <p className="ml-2">{item.label}</p>
                      </div>
                      <div>{dropicon}</div>
                    </div>
                  </li>
                  {(childrenView ||
                    item?.children?.some(
                      (res) => res?.link === location.pathname
                    )) && (
                    <div className="mt-3">
                      {item?.children?.map((child, i) => (
                        <Link
                          to={child.link}
                          className={`my-1 font-Dm text-lg py-1.5 pl-10 flex items-center ${
                            currentPath === child.id
                              ? "bg-[#3637EA] text-white"
                              : "text-[#949BAD]"
                          }`}
                          key={child.id}
                          onClick={() => {
                            child.click();
                          }}
                        >
                          <li className="flex items-center  hover:text-gray-200 px-6 ms-2">
                            <span className="ml-2">{child.label}</span>
                          </li>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              );
            } else {
              return (
                <Link
                  to={item.link}
                  className={`my-1 font-Dm text-lg py-1.5 flex items-center ${
                    currentPath === item.id
                      ? "bg-[#3637EA] text-white"
                      : "text-[#949BAD]"
                  }`}
                  key={item.id}
                  onClick={() => {
                    item.click();
                  }}
                >
                  <li className="flex items-center  hover:text-gray-200 px-6 ms-2">
                    {
                      item.icon && item.icon
                      // <img src={item.icon} alt="" className="w-4 h-4" />
                    }
                    <span className="ml-2">{item.label}</span>
                  </li>
                </Link>
              );
            }
          })}
        </ul>

        {/* Bottom Items */}
        <div className="absolute bottom-8">
          <div className="ms-2 px-6 flex items-center  cursor-pointer py-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8067 8.12358L20.1842 7.04349C19.6577 6.12957 18.4907 5.81429 17.5755 6.33869V6.33869C17.1399 6.59531 16.6201 6.66812 16.1307 6.54106C15.6413 6.41399 15.2226 6.09749 14.9668 5.66134C14.8023 5.38412 14.7139 5.06836 14.7105 4.74601V4.74601C14.7254 4.22919 14.5304 3.72837 14.17 3.35764C13.8096 2.98691 13.3145 2.77783 12.7975 2.77805H11.5435C11.037 2.77804 10.5513 2.97988 10.194 3.33891C9.83669 3.69795 9.63717 4.18456 9.63961 4.69109V4.69109C9.6246 5.73689 8.77248 6.57678 7.72657 6.57667C7.40421 6.57332 7.08846 6.48491 6.81123 6.32038V6.32038C5.89606 5.79598 4.72911 6.11126 4.20254 7.02519L3.53435 8.12358C3.00841 9.03636 3.3194 10.2026 4.23 10.7323V10.7323C4.8219 11.074 5.18653 11.7056 5.18653 12.389C5.18653 13.0725 4.8219 13.704 4.23 14.0458V14.0458C3.32056 14.5719 3.00923 15.7353 3.53435 16.6453V16.6453L4.16593 17.7346C4.41265 18.1798 4.8266 18.5083 5.31619 18.6474C5.80578 18.7866 6.33064 18.7249 6.77462 18.476V18.476C7.21108 18.2213 7.73119 18.1515 8.21934 18.2822C8.70749 18.4128 9.12324 18.733 9.37416 19.1716C9.5387 19.4489 9.62711 19.7646 9.63046 20.087V20.087C9.63046 21.1435 10.487 22 11.5435 22H12.7975C13.8505 22 14.7055 21.1491 14.7105 20.0961V20.0961C14.7081 19.588 14.9089 19.1 15.2682 18.7407C15.6275 18.3814 16.1155 18.1806 16.6236 18.1831C16.9452 18.1917 17.2596 18.2797 17.5389 18.4394V18.4394C18.4517 18.9653 19.6179 18.6543 20.1476 17.7437V17.7437L20.8067 16.6453C21.0618 16.2075 21.1318 15.686 21.0012 15.1963C20.8706 14.7067 20.5502 14.2893 20.111 14.0366V14.0366C19.6718 13.7839 19.3514 13.3665 19.2208 12.8769C19.0902 12.3873 19.1603 11.8658 19.4154 11.4279C19.5812 11.1383 19.8214 10.8982 20.111 10.7323V10.7323C21.0161 10.2029 21.3264 9.04346 20.8067 8.13274V8.13274V8.12358Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12.175"
                cy="12.389"
                r="2.63616"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className=" text-white hover:text-gray-200  ml-2">
              Department
            </button>
          </div>

          <div className="ms-2 px-6 flex items-center cursor-pointer py-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="#F9FAFB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <button className=" text-white hover:text-gray-200  ml-2">
              Bilal Arif
            </button>
          </div>

          {/* Logout */}
          <div
            className="ms-2 px-6 flex items-center cursor-pointer py-2"
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

            <button className="text-white hover:text-gray-200 ml-2">
              logout
            </button>
          </div>

          {/* image */}
          <figure className="absolute -right-16 bottom-3">
            <img
              className="w-14 h-14 rounded-full"
              src={sidebarUser}
              alt="users"
            />
          </figure>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

const dropicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
