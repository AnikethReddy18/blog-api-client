import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Signup from "./pages/signup.jsx"
import Login from "./pages/login.jsx"
import MyBlogs from "./pages/myBlogs.jsx"
import Write from "./pages/write.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/my-blogs",
    element: <MyBlogs />
  },
  {
    path: "/write",
    element: <Write />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
