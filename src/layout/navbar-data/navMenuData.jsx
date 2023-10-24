import React from "react";
import { useState } from "react";

const dashboardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      d="M3 7.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6ZM14 20.4v-3.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM14 12.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 20.4v-8.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
    ></path>
  </svg>
);

const agentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
    ></path>
  </svg>
);

const departmentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"
    ></path>
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"
    ></path>
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    ></path>
  </svg>
);

const MenuData = () => {
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: dashboardIcon,
      link: "/dashboard",
      iscurrentState,
      click: function () {
        setIscurrentState("Dashboard");
      },
    },

    {
      id: "agents",
      label: "Agents",
      icon: agentIcon,
      link: "/agents",
      iscurrentState,
      click: function () {
        setIscurrentState("Agents");
      },
    },
    {
      id: "department",
      label: "Department",
      icon: departmentIcon,
      link: "/department",
      iscurrentState,
      click: function () {
        setIscurrentState("Department");
      },
    },
    {
      id: "allCalls",
      label: "All calls",
      icon: departmentIcon,
      link: "/allCalls",
      iscurrentState,
      click: function () {
        setIscurrentState("All calls");
      },
    },
    {
      id: "passed",
      label: "Passed",
      icon: departmentIcon,
      link: "/passed",
      iscurrentState,
      click: function () {
        setIscurrentState("Passed");
      },
    },
    {
      id: "failed",
      label: "Failed",
      icon: departmentIcon,
      link: "/falied",
      iscurrentState,
      click: function () {
        setIscurrentState("Failed");
      },
    },
    {
      id: "inProgress",
      label: "InProgress",
      icon: departmentIcon,
      link: "/inProgress",
      iscurrentState,
      click: function () {
        setIscurrentState("InProgress");
      },
    },
  ];

  return <React.Fragment>{menus}</React.Fragment>;
};

export default MenuData;
