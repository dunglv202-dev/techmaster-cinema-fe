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

export const cancelBooking = async (id: number) => {
  await axios.post(`/api/bookings/${id}/cancel`)
}

export const getPaymentUrl = async (id: number) => {
  const resp = await axios.get<string>(`/api/bookings/${id}/pay`)
  return resp.data
}
