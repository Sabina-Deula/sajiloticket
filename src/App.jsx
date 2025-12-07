
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Footer from './components/Bottom'
import Home from './home/Home'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/footer",
          element: <Footer />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
