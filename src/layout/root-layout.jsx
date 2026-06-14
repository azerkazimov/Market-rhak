import { Outlet } from 'react-router-dom'
import Navbar from '../base/navbar/navbar'

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-10">
        <Outlet />
      </main>
    </div>
  )
}
