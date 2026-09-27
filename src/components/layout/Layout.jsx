import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen bg-surface-950 text-surface-100">
      <ScrollToTop />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
