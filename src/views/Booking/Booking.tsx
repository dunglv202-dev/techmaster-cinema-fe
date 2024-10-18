import { ScheduleDetails } from '@/models/schedule'
import SeatSelector from './SeatSelector/SeatSelector'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getScheduleDetails } from '@/services/schedule-service'
import { Seat } from '@/models/seat'
import { Button, Divider, Image, Space, Typography } from 'antd'
import moment from 'moment'
import DescriptorMeta from '@/components/DescriptorMeta'

const Booking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState<ScheduleDetails>()
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const ticketTotalPrice = selectedSeats.map((s) => s!.price).reduce((acc, sum) => acc + sum, 0)

  useEffect(() => {
    if (!id) return
    getScheduleDetails(Number(id)).then(setDetails)
  }, [id])

  return (
    <>
      <Space>
        <Typography.Title level={2} style={{ fontSize: 16, margin: 0 }}>
          {details?.cinema} | {details?.room} - {moment(details?.start).format('MMM DD, hh:mm A')} ~{' '}
          {moment(details?.end).format('hh:mm A')}
        </Typography.Title>
      </Space>
      <Divider />
      <SeatSelector seats={details?.seats || []} onChange={setSelectedSeats} />
      <Divider />
      <Space style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Space align='start'>
          <Image src={details?.movie.thumbnail} height={200} preview={false} />
          <Space direction='vertical'>
            <Typography.Title level={3} style={{ margin: 0, fontSize: 15 }}>
              {details?.movie.name}
            </Typography.Title>
            <DescriptorMeta label='Rạp' content={details?.cinema} />
            <DescriptorMeta label='Suất chiếu' content={moment(details?.start).format('hh:mm A')} />
            <DescriptorMeta label='Phòng chiếu' content={details?.room} />
            <DescriptorMeta
              label='Ghế đã chọn'
              content={selectedSeats.map((s) => s?.code).join(', ')}
            />
          </Space>
        </Space>
        <Space direction='vertical'>
          <DescriptorMeta
            label='Tổng tiền'
            content={`${new Intl.NumberFormat().format(ticketTotalPrice)} đ`}
          />
          <Button type='primary' style={{ width: '100%' }}>
            Đặt vé
          </Button>
          <Button type='dashed' style={{ width: '100%' }} onClick={() => navigate('/')}>
            Hủy
          </Button>
        </Space>
      </Space>
    </>
  )
}

export default Booking
