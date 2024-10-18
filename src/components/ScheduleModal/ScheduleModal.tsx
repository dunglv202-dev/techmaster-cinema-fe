import { Location } from '@/models/location'
import { getMovieSchedules } from '@/services/schedule-service'
import { Divider, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import DateSelector from './DateSelector'
import LocationSelector from './LocationSelector'
import ScheduleSelector from './ScheduleSelector'
import { CinemaSchedule } from '@/models/schedule'

interface ScheduleModalProps {
  movieId?: number
  visible: boolean
  onClose: () => void
}

const ScheduleModal = ({ movieId, visible, onClose }: ScheduleModalProps) => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<Location>()
  const [date, setDate] = useState<Date>()
  const [schedules, setSchedules] = useState<CinemaSchedule[]>([])

  useEffect(() => {
    console.log('movieId', movieId)
    console.log('location', location)
    console.log('date', date)
    if (!movieId || !location || !date) return
    const fetchSchedules = async () => {
      setLoading(true)
      try {
        const schedules = await getMovieSchedules(movieId, {
          date,
          location: location.code,
        })
        setSchedules(schedules)
      } finally {
        setLoading(false)
      }
    }
    fetchSchedules()
  }, [movieId, location, date])

  return (
    <Modal open={visible} onCancel={onClose} width={1000} footer>
      <div style={{ padding: 10 }}>
        <Spin spinning={loading}>
          <DateSelector onSelect={setDate} />
          <Divider style={{ marginTop: 15 }} />
          <LocationSelector onSelect={setLocation} />
          <Divider />
          <ScheduleSelector schedules={schedules} />
        </Spin>
      </div>
    </Modal>
  )
}

export default ScheduleModal
