import { Booking, BookingRequest } from '@/models/booking'
import { ResultPage } from '@/models/pagination'
import axios from 'axios'

export const bookTicket = async (booking: BookingRequest) => {
  await axios.post('/api/tickets/book', booking)
}

export const getMyBookings = async () => {
  const resp = await axios.get<ResultPage<Booking>>('/api/tickets')
  return resp.data
}
