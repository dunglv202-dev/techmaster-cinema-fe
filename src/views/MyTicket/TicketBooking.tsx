import DescriptorMeta from '@/components/DescriptorMeta'
import Timer from '@/components/Timer/Timer'
import { Booking } from '@/models/booking'
import { Button, Card, Image, Space, Tag, Typography } from 'antd'
import moment from 'moment'

interface TicketBookingProps {
  booking: Booking
  onExpired: () => void
}

const TicketBooking = ({ booking, onExpired }: TicketBookingProps) => {
  return (
    <Card>
      <div style={{ display: 'flex', gap: 15 }}>
        <Image src={booking.movie.thumbnail} alt={booking.movie.name} width={120} preview={false} />
        <Card.Meta
          style={{ flexGrow: 1 }}
          title={booking.movie.name}
          description={
            <>
              <Space direction='vertical'>
                <Typography.Text italic>
                  {booking.cinema} | {booking.room} |{' '}
                  {moment(booking.start).format('MMM DD, hh:mm A')}
                </Typography.Text>
                <DescriptorMeta label='Ghế' content={booking.seats.join(', ')} />
                <DescriptorMeta
                  label='Tổng'
                  content={new Intl.NumberFormat().format(booking.grandTotal) + ' đ'}
                />
                {booking.status === 'PENDING_PAYMENT' && (
                  <Tag color='processing'>Chờ thanh toán</Tag>
                )}
                {booking.status === 'PAID' && <Tag color='success'>Đã thanh toán</Tag>}
                {booking.status === 'CANCELED' && <Tag color='default'>Đã hủy</Tag>}
              </Space>
            </>
          }
        />
        {booking.status === 'PENDING_PAYMENT' && (
          <Space direction='vertical' style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <Typography.Text italic>Hạn thanh toán</Typography.Text>
              <Typography.Text strong style={{ fontSize: 18, display: 'block' }}>
                <Timer deadline={booking.paymentDeadline} onExpired={onExpired} />
              </Typography.Text>
            </div>
            <Button type='primary'>Thanh toán ngay</Button>
            <Button style={{ width: '100%' }} type='dashed'>
              Hủy
            </Button>
          </Space>
        )}
      </div>
    </Card>
  )
}

export default TicketBooking
