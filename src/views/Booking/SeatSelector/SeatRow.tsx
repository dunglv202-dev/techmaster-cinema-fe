import { ReactElement } from 'react'
import styles from './SeatRow.module.css'

interface SeatRowProps {
  children: ReactElement[]
}

const SeatRow = ({ children }: SeatRowProps) => {
  return <div className={styles['seat_row']}>{children}</div>
}

export default SeatRow
