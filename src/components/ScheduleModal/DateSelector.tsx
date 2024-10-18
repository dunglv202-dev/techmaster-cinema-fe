import { Button, Col, Row, Space } from 'antd'
import moment from 'moment'
import { useCallback, useEffect, useState } from 'react'

interface DateSelectorProps {
  onSelect: (date: Date) => void
}

const DateSelector = ({ onSelect }: DateSelectorProps) => {
  const [dates, setDates] = useState<Date[]>()
  const [selected, setSelected] = useState<Date>()

  const selectDate = useCallback(
    (date: Date) => {
      setSelected(date)
      onSelect(date)
    },
    [onSelect]
  )

  useEffect(() => {
    const fetchDates = async () => {
      const today = moment().startOf('day')
      const dates = Array.from({ length: 24 }, (_, i) => today.add(i, 'days').toDate())
      setDates(dates)
      selectDate(dates[0])
    }
    fetchDates()
  }, [selectDate])

  return (
    <Row>
      {dates?.map((date) => (
        <Col key={date.getTime()} span={2} style={{ marginBottom: 10 }}>
          <Button
            type={date === selected ? 'primary' : 'default'}
            onClick={() => selectDate(date)}
            style={{ height: 'auto' }}
          >
            <Space direction='vertical'>
              <span>{moment(date).format('DD/MM')}</span>
              <span>{moment(date).format('ddd')}</span>
            </Space>
          </Button>
        </Col>
      ))}
    </Row>
  )
}

export default DateSelector
