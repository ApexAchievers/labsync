import { createBrowserRouter, RouterProvider } from "react-router";
import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import PatientDashboard from "./pages/PatientDashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TaskDetail from "./pages/TaskDetail";
import ManagerDashboard from "./pages/ManagerDashboard";
import NotFound from "./pages/NotFound";
import AppointmentPage from "./pages/AppointmentPage";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  const labSyncRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/profile", element: <Profile /> },
    { path: "/edit-profile", element: <Profile /> },
    { path: "patient-dashboard", element: <PatientDashboard /> },
    { path: "technician-dashboard", element: <TechnicianDashboard /> },
    { path: "/tasks/:id", element: <TaskDetail /> },
    { path: "manager-dashboard", element: <ManagerDashboard /> },
    { path: "/appointment-page", element: <AppointmentPage /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={labSyncRouter} />
    </>
  );
}

export default App;
