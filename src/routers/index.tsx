import DefaultLayout from '@/layouts/DefaultLayout'
import Booking from '@/views/Booking/Booking'
import MovieDetails from '@/views/Detail/MovieDetails'
import HomePage from '@/views/Home/Home'
import MyTicket from '@/views/MyTicket/MyTicket'
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
      {
        path: '/booking/:id',
        element: <Booking />,
      },
      {
        path: '/me/tickets',
        element: <MyTicket />,
      },
    ],
  },
])
