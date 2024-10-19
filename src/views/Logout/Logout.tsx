import Loading from '@/components/Loading'
import AuthContext from '@/context/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const doLogout = async () => {
      await authContext.logout()
      navigate('/')
    }
    doLogout()
  }, [authContext, navigate])

  return <Loading fullscreen></Loading>
}

export default Logout
