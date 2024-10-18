import moment from 'moment'
import { useCallback, useEffect, useState } from 'react'

interface TimerProps {
  deadline: Date | string
  onExpired?: () => void
}

const Timer = ({ deadline, onExpired }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>()

  const calculateTimeLeft = useCallback(() => {
    const now = moment()
    const targetTime = moment(deadline)
    const duration = moment.duration(targetTime.diff(now))
    const minutes = Math.max(Math.floor(duration.asMinutes()), 0)
    const seconds = Math.max(duration.seconds(), 0)
    return { minutes, seconds }
  }, [deadline])

  useEffect(() => {
    const timer = setInterval(() => {
      const left = calculateTimeLeft()
      // check if expired
      if (left.minutes === 0 && left.seconds === 0) {
        onExpired?.()
        clearInterval(timer)
        return
      }
      setTimeLeft(left)
    }, 1000)

    return () => clearInterval(timer)
  }, [deadline, calculateTimeLeft, onExpired])

  return timeLeft ? (
    <span>
      {timeLeft?.minutes.toString().padStart(2, '0')}:
      {timeLeft?.seconds.toString().padStart(2, '0')}
    </span>
  ) : (
    '-'
  )
}

export default Timer
