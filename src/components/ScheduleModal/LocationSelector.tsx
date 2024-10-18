import { Location } from '@/models/location'
import { getLocations } from '@/services/location-service'
import { Button, Space } from 'antd'
import { useCallback, useEffect, useState } from 'react'

interface LocationSelectorProps {
  onSelect: (location: Location) => void
}

const LocationSelector = ({ onSelect }: LocationSelectorProps) => {
  const [locations, setLocations] = useState<Location[]>([])
  const [selected, setSelected] = useState<Location>()

  const selectLocation = useCallback(
    (location: Location) => {
      setSelected(location)
      onSelect(location)
    },
    [onSelect]
  )

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations()
      setLocations(locations)
    }
    fetchLocations()
  }, [])

  useEffect(() => {
    if (locations.length > 0) {
      selectLocation(locations[0])
    }
  }, [locations, selectLocation])

  return (
    <Space style={{ gap: 10 }} wrap>
      {locations?.map((location) => (
        <Button
          key={location.code}
          type={location === selected ? 'primary' : 'default'}
          onClick={() => selectLocation(location)}
        >
          {location.name}
        </Button>
      ))}
    </Space>
  )
}

export default LocationSelector
