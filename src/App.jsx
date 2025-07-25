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
import ViewAppointment from "./pages/ViewAppointment";
import OTP from "./pages/OTP";
import SelectDate from "./pages/SelectDate";
import EditProfileTech from "./pages/EditProfileTech";
import ProfileTech from "./pages/ProfileTech";
import { ToastContainer } from "react-toastify";
import TechPage from "./pages/TechPage";
import DashboardHome from "./pages/DashboardHome";
import EditAppointment from "./pages/EditAppointment";
import SupportPage from "./pages/SupportPage";
import TechLogin from "./pages/TechLogin";
import Appointments from "./pages/Appointments";


function App() {
  const [count, setCount] = useState(0);

  const labSyncRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/profile", element: <Profile /> },
    { path: "/edit-profile", element: <EditProfile /> },
    {
      path: "patient-dashboard",
      element: <PatientDashboard />,
      children: [
        {
          index: true,
          element: <DashboardHome />, // Extracted welcome dashboard component
        },
        {
          path: "view-appointment",
          element: <ViewAppointment />,
        },
        {
          path: "appointment-page",
          element: <AppointmentPage />,
        },
        {
          path: "edit-appointment",
          element:  <EditAppointment />,
        },

        {
          path: "appointments",
          element: <Appointments />, // this is for booked appointments
        },

        {
          
        }
        // Add more nested routes if needed
      ],
    },

    { path: "technician-dashboard", element: <TechnicianDashboard /> },
    { path: "/tasks/:id", element: <TaskDetail /> },
    { path: "manager-dashboard", element: <ManagerDashboard /> },
    
    { path: "/select-date", element: <SelectDate /> },
    
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
    { path: "/otp", element: <OTP /> },
    { path: "/edit-profile-tech", element: <EditProfileTech /> },
    { path: "/profile-tech", element: <ProfileTech /> },
    { path: "/tech-page/:id", element: <TechPage /> },
    { path: "/support-page", element: <SupportPage /> },
    { path: "/technician-login", element: <TechLogin /> },
   
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={labSyncRouter} />
    </>
  );
}

export default App;
