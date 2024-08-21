import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../src/config/FirebaseConfig.ts'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './pages/Index.tsx'
import Packages from './pages/Packages.tsx'
import Guide from './pages/Guide.tsx'
import SinglePackage from './pages/SinglePackage.tsx'
import ContactUs from './pages/ContactUs.tsx'
import About from './pages/About.tsx'
import Opinions from './pages/Opinions.tsx'
import Login from './pages/admin/Login.tsx'
import Dashboard from './pages/admin/Dashboard.tsx'
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
    element: <About />
  },
  {
    path: '/contactanos',
    element: <ContactUs />
  },
  {
    path: '/opiniones',
    element: <Opinions />
  },
  //secret post endpoint
  {
    path: '/admin/login',
    element: <Login />
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
