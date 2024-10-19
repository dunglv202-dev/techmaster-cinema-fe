import { Booking } from '@/models/booking'
import { getMyBookings } from '@/services/booking-service'
import { Button, Empty, Space, Spin, Typography } from 'antd'
import { useEffect, useState } from 'react'
import TicketList from './TicketList'
import { Link } from 'react-router-dom'

const MyTicket = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)

  const fetchBookings = async () => {
    setLoading(true)
    try {
      const bookings = await getMyBookings()
      setBookings(bookings.content)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <>
      <Typography.Title level={2} style={{ fontSize: 19 }}>
        Vé của tôi
      </Typography.Title>
      <Spin spinning={loading}>
        <Space direction='vertical' style={{ display: 'flex' }}>
          {bookings.length ? (
            <TicketList
              bookings={bookings}
              onTicketCancel={fetchBookings}
              onTicketExpired={fetchBookings}
            />
          ) : (
            <Empty description='Không có vé nào'>
              <Link to='/'>
                <Button type='primary'>Xem phim ngay</Button>
              </Link>
            </Empty>
          )}
        </Space>
      </Spin>
    </>
  )
}

export default MyTicket
