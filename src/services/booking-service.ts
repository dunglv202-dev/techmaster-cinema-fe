import { Booking, BookingRequest } from '@/models/booking'
import { ResultPage } from '@/models/pagination'
import axios from 'axios'

export const bookTicket = async (booking: BookingRequest) => {
  await axios.post('/api/bookings', booking)
}

export const getMyBookings = async () => {
  const resp = await axios.get<ResultPage<Booking>>('/api/bookings')
  return resp.data
}
