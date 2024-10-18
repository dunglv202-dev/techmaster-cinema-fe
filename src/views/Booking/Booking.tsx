import { ScheduleDetails } from '@/models/schedule'
import SeatSelector from './SeatSelector/SeatSelector'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getScheduleDetails } from '@/services/schedule-service'
import { Seat } from '@/models/seat'
import { Divider, Image, Space, Typography } from 'antd'
import moment from 'moment'

const Booking = () => {
  const { id } = useParams()
  const [details, setDetails] = useState<ScheduleDetails>()
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])

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
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Space align='start'>
          <Image src={details?.movie.thumbnail} height={200} preview={false} />
          <Space direction='vertical'>
            <Typography.Title level={3} style={{ margin: 0, fontSize: 15 }}>
              {details?.movie.name}
            </Typography.Title>
            <Typography.Text>Rạp: {details?.cinema}</Typography.Text>
            <Typography.Text>
              Suất chiếu: {moment(details?.start).format('hh:mm A')}
            </Typography.Text>
            <Typography.Text>Phòng chiếu: {details?.room}</Typography.Text>
            <Typography.Text>
              Ghế đã chọn: {selectedSeats.map((s) => s?.code).join(', ')}
            </Typography.Text>
          </Space>
        </Space>
        <Space>
          <Typography.Title level={3} style={{ margin: 0, fontSize: 15 }}>
            {selectedSeats.length > 0
              ? `Tổng tiền: ${selectedSeats.length * 75000}đ`
              : 'Vui lòng chọn ghế'}
          </Typography.Title>
        </Space>
      </Space>
    </>
  )
}

export default Booking
