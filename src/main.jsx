import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='container max-w-screen-xl mx-auto'>
     <RouterProvider router={Routes}></RouterProvider>
   </div>
  </StrictMode>,
)
