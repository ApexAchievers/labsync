import { createBrowserRouter, RouterProvider } from "react-router";


function App() {
  const [count, setCount] = useState(0)

   const nogmaHEnterpriseRouter = createBrowserRouter([
    
   ]);

  return (
    <>
      <RouterProvider router={labSyncRouter} />
    </>
  )
}

export default App
