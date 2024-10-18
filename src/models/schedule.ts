import { Movie } from './movie'
import { Seat } from './seat'

export interface Schedule {
  id: number
  start: string
  end: string
}

export interface CinemaSchedule {
  name: string /* Cinema name */
  schedules: Schedule[]
}

export interface ScheduleFilter {
  date: Date
  location: string /* Location code */
}

export interface ScheduleDetails {
  cinema: string
  room: string
  movie: Movie
  seats: Seat[][]
  start: string
  end: string
}
