import { Space, Typography } from 'antd'
import styles from './Seat.module.css'

interface SeatDescriptorProps {
  label: string
  type: 'STANDARD' | 'VIP' | 'OCCUPIED' | 'NOT_AVAILABLE' | 'SELECTED'
}

const SeatDescriptor = ({ type, label }: SeatDescriptorProps) => {
  return (
    <Space>
      <div className={`${styles['seat']} ${styles['small']} ${styles[type.toLowerCase()]}`}></div>
      <Typography.Text>{label}</Typography.Text>
    </Space>
  )
}

export default SeatDescriptor
