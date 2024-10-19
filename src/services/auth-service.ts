import { Credentials, RegistrationInfo } from '@/models/auth'
import axios from 'axios'

export const login = async (credentials: Credentials) => {
  await axios.post('/api/auth/login', credentials)
}

export const register = async (info: RegistrationInfo) => {
  await axios.post('/api/auth/register', info)
}

export const logout = async () => {
  await axios.post('/api/auth/logout')
}
