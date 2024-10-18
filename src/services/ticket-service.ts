import { Booking } from '@/models/booking'
import axios from 'axios'

export const bookTicket = async (booking: Booking) => {
  await axios.post('/api/tickets/book', booking)
}
