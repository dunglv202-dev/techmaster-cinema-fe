import { type Seat } from '@/models/seat'
import styles from './Seat.module.css'
import { useState } from 'react'

interface SeatProps {
  seat: Seat
  onClick: (selected: boolean) => void
}

const Seat = ({ seat, onClick }: SeatProps) => {
  const [selected, setSelected] = useState(false)

  const toggle = () => {
    if (seat?.status === 'VACANT') {
      const newState = !selected
      setSelected(newState)
      onClick(newState)
    }
  }

  return (
    <div
      onClick={toggle}
      className={[
        'seat',
        selected ? 'selected' : null,
        !seat ? 'none' : null,
        seat?.type.toLowerCase(),
        seat?.status.toLowerCase(),
      ]
        .filter((s) => !!s)
        .map((s) => styles[s!])
        .join(' ')}
    >
      {seat && seat.status !== 'NOT_AVAILABLE' ? seat.code : null}
    </div>
  )
}

export default Seat
