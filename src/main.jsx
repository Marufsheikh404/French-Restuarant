import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='container max-w-screen-xl mx-auto'>
    <HelmetProvider>
       <RouterProvider router={Routes}></RouterProvider>
    </HelmetProvider>
   </div>
  </StrictMode>,
)
