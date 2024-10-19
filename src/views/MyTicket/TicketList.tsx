import { Booking } from '@/models/booking'
import TicketBooking from './TicketBooking'

interface TicketListProps {
  bookings: Booking[]
  onTicketExpired: () => void
  onTicketCancel: () => void
}

const TicketList = ({ bookings, onTicketCancel, onTicketExpired }: TicketListProps) => {
  return bookings.map((booking) => (
    <TicketBooking
      key={booking.id}
      booking={booking}
      onExpired={onTicketExpired}
      onCancel={onTicketCancel}
    />
  ))
}

export default TicketList
