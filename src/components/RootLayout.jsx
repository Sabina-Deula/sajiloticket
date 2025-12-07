import React from 'react'
import { Outlet } from 'react-router'
import Bottom from './Bottom'

export default function RootLayout() {
  return (
    <div>
      <Outlet />
      {/* <Bottom /> */}
    </div>
  )
}
