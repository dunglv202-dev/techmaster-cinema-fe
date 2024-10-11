import DefaultLayout from '@/layouts/DefaultLayout'
import HomePage from '@/views/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
])
