import React from 'react';
import './App.css';
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';  
import Packages from './pages/Packages';
import Hotels from './pages/Hotels';  
import Insurance from './pages/Insurance';
import Contact from './pages/Contact';    
import Search from './components/Search';
import Bottom from './components/Bottom';
import RootLayout from './components/RootLayout';


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
        path: "about",
        element: <AboutUs />,
      },
    {
      path: "packages",
      element: <Packages />,  
    },
    {
      path: "hotels",
      element: <Hotels />,  
    },
    {
      path:"insurance",
      element: <Insurance />,
    },
    {
      path:"contact",
      element: <Contact />, 
    },
              {
          path: "/",
          element: <Search />,
        },
        {
          path: "bottom",
          element: <Bottom />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
