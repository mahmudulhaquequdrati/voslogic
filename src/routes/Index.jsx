import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";

// import Dashboard from "../pages/Dashboard";
import AuthProtected from "./AuthProtected";
import PublicRoute from "./PublicRoutes";
import Login from "../pages/authentication/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Department from "../pages/department/Depertment";
import Agents from "../pages/agents/Agents";

// import Register from "../pages/authentication/Register";
// import AddStock from "../pages/addStock/AddStock";
// import HRM from "../pages/hrm/HRM";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: (
      <AuthProtected>
        <Layout />
      </AuthProtected>
    ),
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      { path: "/dashboard", element: <Dashboard /> },

      {
        path: "/department",
        element: <Department />,
      },
      { path: "/agents", element: <Agents /> },
      {
        path: "*",
        element: (
          <h1
            style={{
              height: `calc(100vh - 64px)`,
            }}
            className={`flex justify-center items-center`}
          >
            Please type a valid url!
          </h1>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);

export default router;
