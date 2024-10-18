import { Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import TicketBooking from './TicketBooking'
import { getMyBookings } from '@/services/ticket-service'
import { Booking } from '@/models/booking'

const MyTicket = () => {
  const [bookings, setBookings] = useState<Booking[]>([])

  const fetchBookings = async () => {
    const bookings = await getMyBookings()
    setBookings(bookings.content)
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <>
      <Typography.Title level={3}>Vé của tôi</Typography.Title>
      <Space direction='vertical' style={{ display: 'flex' }}>
        {bookings.map((booking) => (
          <TicketBooking key={booking.id} booking={booking} onExpired={fetchBookings} />
        ))}
      </Space>
    </>
  )
}

export default MyTicket
