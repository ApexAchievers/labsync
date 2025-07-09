import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  const labSyncRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/not-found", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={labSyncRouter} />
    </>
  );
}

export default App;
