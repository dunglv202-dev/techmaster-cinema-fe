import AuthContext from '@/context/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface GuardProps {
  children: React.ReactElement
}

const Guard = ({ children }: GuardProps) => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authContext.user) {
      navigate('/login')
    }
  }, [authContext.user, navigate])

  return children
}

export default Guard
