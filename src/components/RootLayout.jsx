import React from 'react'
import { Outlet } from 'react-router'
import Bottom from './Bottom'
import Navbar from './Navbar'

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Bottom /> 
    </div>
  )
}