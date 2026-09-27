import { Link } from 'react-router-dom'
import { Send, ShieldCheck, MessageCircle } from 'lucide-react'
import { LINKS } from '../../data/products'

export default function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="PapaBanks" className="h-8 w-8 rounded-lg" />
              <span className="text-base font-bold text-white">PapaBanks</span>
            </Link>
            <p className="text-sm text-surface-400 max-w-xs">
              Premium digital banking accounts marketplace. Curated, verified, ready to use.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/products" className="text-sm text-surface-400 hover:text-brand-400">All Products</Link></li>
              <li><Link to="/uk" className="text-sm text-surface-400 hover:text-brand-400">UK Products</Link></li>
              <li><Link to="/products" className="text-sm text-surface-400 hover:text-brand-400">Business</Link></li>
              <li><Link to="/products" className="text-sm text-surface-400 hover:text-brand-400">Crypto VCC</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Community</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={LINKS.channel} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-surface-400 hover:text-brand-400">
                  <Send size={14} /> Telegram Channel
                </a>
              </li>
              <li>
                <a href={LINKS.vouches} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-surface-400 hover:text-brand-400">
                  <ShieldCheck size={14} /> Vouches
                </a>
              </li>
              <li>
                <a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-surface-400 hover:text-brand-400">
                  <MessageCircle size={14} /> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="text-sm text-surface-400 hover:text-brand-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-surface-800 pt-6 flex items-center justify-center">
          <p className="text-xs text-surface-500">© 2026 PapaBanks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
