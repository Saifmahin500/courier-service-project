import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Root from './MainLayout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './MainLayout/Dashboard';
import BookParcel from './Pages/DashBoard/BookParcel';
import MyParcel from './Pages/DashBoard/MyParcel';
import AllUsers from './Pages/DashBoard/AllUsers';
import AllDeliveryMan from './Pages/DashBoard/AllDeliveryMan';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './PrivateRoute/AdminRoute';
import AllParcel from './Pages/DashBoard/AllParcel';

const queryClient = new QueryClient()
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children : [
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>
      },
      {
        path: "MyParcels",
        element: <MyParcel></MyParcel>
      },
      // admit route
      {
        path: "users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "AllDeliveryMen",
        element: <AdminRoute><AllDeliveryMan></AllDeliveryMan></AdminRoute>
      },
      {
        path: "AllParcels",
        element: <AdminRoute><AllParcel></AllParcel></AdminRoute>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="max-w-6xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider> 
    </AuthProvider>
    
  </React.StrictMode>,
)
