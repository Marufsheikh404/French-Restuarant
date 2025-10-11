import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='container max-w-screen-xl mx-auto'>
        <RouterProvider router={Routes}></RouterProvider>
      </div>
    </AuthProvider>
  </StrictMode>,
)
