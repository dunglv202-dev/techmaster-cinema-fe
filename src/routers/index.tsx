import DefaultLayout from '@/layouts/DefaultLayout'
import MovieDetails from '@/views/Detail/MovieDetails'
import HomePage from '@/views/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />,
      },
    ],
  },
])
