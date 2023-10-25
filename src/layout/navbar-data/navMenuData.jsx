import React, { useState } from "react";

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
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8877 11.3967C19.2827 11.2007 20.3567 10.0047 20.3597 8.5557C20.3597 7.1277 19.3187 5.9437 17.9537 5.7197"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.7285 14.7503C21.0795 14.9523 22.0225 15.4253 22.0225 16.4003C22.0225 17.0713 21.5785 17.5073 20.8605 17.7813"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8867 15.1638C8.67273 15.1638 5.92773 15.6508 5.92773 17.5958C5.92773 19.5398 8.65573 20.0408 11.8867 20.0408C15.1007 20.0408 17.8447 19.5588 17.8447 17.6128C17.8447 15.6668 15.1177 15.1638 11.8867 15.1638Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8869 12.3879C13.9959 12.3879 15.7059 10.6789 15.7059 8.56891C15.7059 6.45991 13.9959 4.74991 11.8869 4.74991C9.7779 4.74991 8.0679 6.45991 8.0679 8.56891C8.0599 10.6709 9.7569 12.3809 11.8589 12.3879H11.8869Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.88484 11.3967C4.48884 11.2007 3.41584 10.0047 3.41284 8.5557C3.41284 7.1277 4.45384 5.9437 5.81884 5.7197"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.044 14.7503C2.693 14.9523 1.75 15.4253 1.75 16.4003C1.75 17.0713 2.194 17.5073 2.912 17.7813"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const departmentIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.37145 10.7017V17.5618"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0382 7.41913V17.5618"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6285 14.3268V17.5618"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const reviewIcons = (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1614 8.5531C13.1614 10.2991 11.7454 11.7141 9.99938 11.7141C8.25338 11.7141 6.83838 10.2991 6.83838 8.5531C6.83838 6.8061 8.25338 5.3911 9.99938 5.3911C11.7454 5.3911 13.1614 6.8061 13.1614 8.5531Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.998 15.8549C13.806 15.8549 17.289 13.1169 19.25 8.5529C17.289 3.9889 13.806 1.2509 9.998 1.2509H10.002C6.194 1.2509 2.711 3.9889 0.75 8.5529C2.711 13.1169 6.194 15.8549 10.002 15.8549H9.998Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
      id: "review",
      label: "Review",
      icon: reviewIcons,
      link: "/review",
      iscurrentState,
      click: function () {
        setIscurrentState("Department");
      },
    },
    {
      id: "all_calls",
      label: "All Calls",
      icon: null,
      link: "/all_calls",
      iscurrentState,
      click: function () {
        setIscurrentState("Department");
      },
    },
    {
      id: "passed",
      label: "Passed",
      icon: null,
      link: "/passed",
      iscurrentState,
      click: function () {
        setIscurrentState("Department");
      },
    },
    {
      id: "failed",
      label: "Failed",
      icon: null,
      link: "/failed",
      iscurrentState,
      click: function () {
        setIscurrentState("Department");
      },
    },
  ];

  return <React.Fragment>{menus}</React.Fragment>;
};

export default MenuData;
