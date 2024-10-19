import { ProfileInfo } from '@/models/user'
import axios from 'axios'

export const getMyProfile = async () => {
  const resp = await axios.get<ProfileInfo>('/api/me')
  return resp.data
}
