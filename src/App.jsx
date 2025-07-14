import { createBrowserRouter, RouterProvider } from "react-router";
import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PatientDashboard from "./pages/PatientDashboard";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  const labSyncRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "patient-dashboard", element: <PatientDashboard /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={labSyncRouter} />
    </>
  );
}

export default App;
