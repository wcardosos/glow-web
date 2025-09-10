import { Navigate } from 'react-router-dom'
import { Navbar } from './ui/navbar'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  //const isAuthenticated = localStorage.getItem('token') !== null
  const isAuthenticated = true

  return isAuthenticated ? (
    <main className="max-w-5xl mx-auto px-6 lg:px-0">
      <Navbar />
      {children}
    </main>
  ) : <Navigate to="/login" replace />
}