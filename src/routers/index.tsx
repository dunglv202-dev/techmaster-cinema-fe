import Guard from '@/components/Guard'
import DefaultLayout from '@/layouts/DefaultLayout'
import Booking from '@/views/Booking/Booking'
import MovieDetails from '@/views/Detail/MovieDetails'
import HomePage from '@/views/Home/Home'
import Login from '@/views/Login/Login'
import Logout from '@/views/Logout/Logout'
import ComingSoon from '@/views/Movies/ComingSoon/ComingSoon'
import NowShowing from '@/views/Movies/NowShowing/NowShowing'
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
        path: '/movies/now-showing',
        element: <NowShowing />,
      },
      {
        path: '/movies/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />,
      },
      {
        path: '/booking/:id',
        element: (
          <Guard>
            <Booking />
          </Guard>
        ),
      },
      {
        path: '/me/tickets',
        element: (
          <Guard>
            <MyTicket />
          </Guard>
        ),
      },
    ],
  },
  {
    path: '/logout',
    element: <Logout />,
  },
])
