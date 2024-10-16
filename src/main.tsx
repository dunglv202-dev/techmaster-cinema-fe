import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routers'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
