import { Movie } from './movie'

type BookingStatus = 'PENDING_PAYMENT' | 'PAID' | 'CANCELED'

export interface BookingRequest {
  scheduleId: number
  seats: string[]
}

export interface Booking {
  id: number
  cinema: string
  room: string
  movie: Movie
  start: string
  seats: string[]
  status: BookingStatus
  grandTotal: number
  paymentDeadline: string
}
