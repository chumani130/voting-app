import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Results from './pages/Results'
import Elections from './pages/Elections'
import ElectionsDetails from './pages/ElectionDetails'
import Candidates from './pages/Candidates'
import Congrats from './pages/Congrats'
import Logout from './pages/Logout'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
         index: true,
         element: <Login/>
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "results",
        element: <Results />
      },
      {
        path: "elections",
        element: <Elections />
      },
      {
        path: "elections/:id",
        element: <ElectionsDetails />
      },
      {
        path: "elections/:id/candidates",
        element: <Candidates />
      },
      {
        path: "congrats",
        element: <Congrats />
      },
      {
        path: "logout",
        element: <Logout />
      },
      
      
      

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
