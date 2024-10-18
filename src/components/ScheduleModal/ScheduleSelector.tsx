import { CinemaSchedule } from '@/models/schedule'
import { Button, Space, Typography } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'

interface ScheduleSelectorProps {
  schedules: CinemaSchedule[]
}

const ScheduleSelector = ({ schedules }: ScheduleSelectorProps) => {
  return schedules.map((cinema) => (
    <Space key={cinema.name} direction='vertical'>
      <Typography.Title level={3} style={{ fontSize: 17, margin: 0 }}>
        {cinema.name}
      </Typography.Title>
      {cinema.schedules.map((schedule) => (
        <Link to={`/booking/${schedule.id}`} key={schedule.id}>
          <Button>{moment(schedule.start).format('hh:mm A')}</Button>
        </Link>
      ))}
    </Space>
  ))
}

export default ScheduleSelector
