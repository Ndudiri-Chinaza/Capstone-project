import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app_layouts"
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Link from "./Pages/Link";
import Auth from "./Pages/Auth";
import Redirect from "./Pages/Redirect-link";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Landing />

      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ) 

      },
      {
        path: "/auth",
        element: <Auth />

      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ) 

      },
      {
        path: "/:id",
        element: <Redirect/>

      },
    ]
  }

])

function App() {


  return <UrlProvider>
     <RouterProvider router={router} />
  </UrlProvider>    
};

export default App;
