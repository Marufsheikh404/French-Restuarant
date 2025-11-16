import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
// tanstack query
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='container mx-auto '>
          <RouterProvider router={Routes}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
