import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainLayout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './MainLayout/Dashboard';
import BookParcel from './Pages/DashBoard/BookParcel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/reg",
        element: <Registration></Registration>
      },
      
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children : [
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <div className="max-w-6xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
    
  </React.StrictMode>,
)
