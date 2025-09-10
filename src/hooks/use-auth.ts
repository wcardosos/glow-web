import { useNavigate } from 'react-router-dom'

export function useAuth() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return {
    handleLogout,
  }
}