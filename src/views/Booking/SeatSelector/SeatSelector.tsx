import { Seat } from '@/models/seat'
import { Space } from 'antd'
import { useEffect, useState } from 'react'
import SeatComponent from './Seat'
import SeatDescriptor from './SeatDescriptor'
import SeatRow from './SeatRow'

interface SeatSelectorProps {
  seats: Seat[][]
  onChange: (selected: Seat[]) => void
}

const SeatSelector = ({ seats, onChange }: SeatSelectorProps) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])

  const selectSeat = (seat: Seat) => {
    if (selectedSeats.includes(seat)) return
    setSelectedSeats([...selectedSeats, seat])
  }

  const unselectSeat = (seat: Seat) => {
    setSelectedSeats(selectedSeats.filter((s) => s !== seat))
  }

  useEffect(() => {
    onChange(selectedSeats)
  }, [selectedSeats, onChange])

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        {seats.map((row, rowIndex) => (
          <SeatRow key={rowIndex}>
            {row.map((seat, index) => (
              <SeatComponent
                key={index}
                seat={seat}
                onClick={(selected) => {
                  return selected ? selectSeat(seat) : unselectSeat(seat)
                }}
              />
            ))}
          </SeatRow>
        ))}
      </div>
      <Space direction='vertical' style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
        <Space>
          <SeatDescriptor label='Tiêu chuẩn' type='STANDARD' />
          <SeatDescriptor label='VIP' type='VIP' />
        </Space>
        <Space>
          <SeatDescriptor label='Không thể chọn' type='OCCUPIED' />
          <SeatDescriptor label='Không khả dụng' type='NOT_AVAILABLE' />
          <SeatDescriptor label='Đã chọn' type='SELECTED' />
        </Space>
      </Space>
    </div>
  )
}

export default SeatSelector
