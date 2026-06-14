import { Link } from 'react-router-dom'
import { Sidebar } from '../sidebar/sidebar'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Sidebar />
        </div>
      </div>
    </nav>
  )
}
