import { CinemaSchedule, ScheduleDetails, ScheduleFilter } from '@/models/schedule'
import axios from 'axios'
import moment from 'moment'

export const getMovieSchedules = async (movieId: number, filter: ScheduleFilter) => {
  const resp = await axios.get<CinemaSchedule[]>(`/api/movies/${movieId}/schedules`, {
    params: { ...filter, date: moment(filter.date).format('YYYY-MM-DD') },
  })
  return resp.data
}

export const getScheduleDetails = async (scheduleId: number) => {
  const resp = await axios.get<ScheduleDetails>(`/api/schedules/${scheduleId}`)
  return resp.data
}
