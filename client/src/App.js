import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'

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

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
