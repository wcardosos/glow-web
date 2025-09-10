import { Link, Outlet, useNavigate } from 'react-router-dom'

export function Layout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <header>
        <h1>Glow Web</h1>
        <nav>
          <Link to="/">Upload</Link>
          <Link to="/history">History</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}