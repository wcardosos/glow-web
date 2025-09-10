import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  //const isAuthenticated = localStorage.getItem('token') !== null
  const isAuthenticated = true

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}