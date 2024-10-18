import DefaultLayout from '@/layouts/DefaultLayout'
import Booking from '@/views/Booking/Booking'
import MovieDetails from '@/views/Detail/MovieDetails'
import HomePage from '@/views/Home/Home'
import Login from '@/views/Login/Login'
import MyTicket from '@/views/MyTicket/MyTicket'
import Register from '@/views/Register/Register'
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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
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
