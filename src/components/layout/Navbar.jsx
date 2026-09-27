import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Send } from 'lucide-react'
import Button from '../ui/Button'
import { LINKS } from '../../data/products'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/uk', label: 'UK' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-surface-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="PapaBanks" className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-bold tracking-tight text-white">
            Papa<span className="text-brand-500">Banks</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={LINKS.channel} target="_blank" rel="noopener noreferrer" size="sm" className="hidden sm:inline-flex">
            <Send size={14} /> Channel
          </Button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-surface-400 hover:bg-surface-800 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-surface-800 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-brand-500/10 text-brand-400' : 'text-surface-400'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={LINKS.channel}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white text-center"
            >
              Join Channel
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
