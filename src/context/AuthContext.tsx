import Loading from '@/components/Loading'
import { Credentials } from '@/models/auth'
import { ProfileInfo } from '@/models/user'
import { login as doLogin, logout as doLogout } from '@/services/auth-service'
import { getMyProfile } from '@/services/user-service'
import { createContext, ReactNode, useEffect, useState } from 'react'

const AuthContext = createContext<{
  user?: ProfileInfo
  login: (credentials: Credentials) => Promise<void>
  logout: () => Promise<void>
}>({
  user: undefined,
  login: async () => {},
  logout: async () => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ProfileInfo>()
  const [loading, setLoading] = useState(true)

  const fetchMyProfile = async () => {
    try {
      const user = await getMyProfile()
      setUser(user)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMyProfile()
  }, [])

  const login = async (credentials: Credentials) => {
    await doLogin(credentials)
    await fetchMyProfile()
  }

  const logout = async () => {
    await doLogout()
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Loading loading={loading} fullscreen>
        {children}
      </Loading>
    </AuthContext.Provider>
  )
}

export default AuthContext
