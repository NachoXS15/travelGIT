import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './pages/Index.tsx'
import Packages from './pages/Packages.tsx'
import Guide from './pages/Guide.tsx'
import SinglePackage from './pages/SinglePackage.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/paquetes',
    element: <Packages />
  },
  {
    path: '/paquetes/:id',
    element: <SinglePackage />
  },
  {
    path: '/guias',
    element: <Guide />
  },
  {
    path: '/about',
    element: <Guide />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
