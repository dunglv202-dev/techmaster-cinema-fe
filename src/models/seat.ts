type SeatType = 'STANDARD' | 'VIP'
type SeatStatus = 'VACANT' | 'OCCUPIED' | 'NOT_AVAILABLE'

export type Seat = {
  code: string
  type: SeatType
  status: SeatStatus
  price: number
} | null
