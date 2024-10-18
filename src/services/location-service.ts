import { Location } from '@/models/location'
import axios from 'axios'

export const getLocations = async () => {
  return axios.get<Location[]>('/api/locations').then((res) => res.data)
}
