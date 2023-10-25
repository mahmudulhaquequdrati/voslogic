import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";

// import Dashboard from "../pages/Dashboard";
import Agents from "../pages/agents/Agents";
import AllCalls from "../pages/AllCalls/AllCalls";
import Login from "../pages/authentication/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Department from "../pages/department/Depertment";
import Failed from "../pages/Failed/Failed";
import Passed from "../pages/Passed/Passed";
import Review from "../pages/review/Review";
import AuthProtected from "./AuthProtected";
import PublicRoute from "./PublicRoutes";

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

      { path: "/agents", element: <Agents /> },
      {
        path: "/department",
        element: <Department />,
      },
      { path: "/review", element: <Review /> },
      { path: "/all_calls", element: <AllCalls /> },
      { path: "/passed", element: <Passed /> },
      { path: "/failed", element: <Failed /> },
      { path: "/in-progress", element: <Failed /> },

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
