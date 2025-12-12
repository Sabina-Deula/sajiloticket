import React from 'react';
import './App.css';
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Bottom from './components/Bottom';
import RootLayout from './components/RootLayout';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "bottom",
          element: <Bottom />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
