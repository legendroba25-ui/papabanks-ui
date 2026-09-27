import { Link } from 'react-router-dom'
import { Send, ShieldCheck, MessageCircle, ShoppingBag, MapPin, Wallet } from 'lucide-react'
import Card from '../components/ui/Card'
import { LINKS } from '../data/products'

const buttons = [
  { label: 'Channel', href: LINKS.channelHome, icon: Send, tone: 'brand', external: true },
  { label: 'Vouches', href: LINKS.vouches, icon: ShieldCheck, tone: 'emerald', external: true },
  { label: 'Contact', href: LINKS.contact, icon: MessageCircle, tone: 'violet', external: true },
  { label: 'Products', to: '/products', icon: ShoppingBag, tone: 'amber', external: false },
  { label: 'UK Products', to: '/uk', icon: MapPin, tone: 'sky', external: false },
]

const toneClasses = {
  brand: 'bg-brand-500/10 text-brand-400 group-hover:bg-brand-600',
  emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600',
  violet: 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-600',
  amber: 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-600',
  sky: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-600',
}

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-4 pt-24 pb-24 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8">
        <div className="text-center">
          <img src="/logo.png" alt="PapaBanks" className="mx-auto mb-8 h-24 w-24 rounded-3xl shadow-2xl shadow-brand-600/30 object-cover" />
          <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-sm shadow-brand-600/30 mb-6">
            PORTAL
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance flex items-center justify-center gap-3">
            PapaBanks Portal
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
              <Wallet size={24} />
            </span>
          </h1>
          <p className="mt-5 text-base leading-7 text-surface-400 text-balance">
            Find all my contacts, channels, and products right here.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {buttons.map((btn) => {
            const Icon = btn.icon
            const content = (
              <Card hover className="group flex items-center gap-4 p-5 h-full bg-surface-900/50 border-surface-800">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white ${toneClasses[btn.tone]}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-base font-semibold text-white">{btn.label}</p>
                  <p className="text-xs text-surface-400">
                    {btn.external ? 'Opens in Telegram' : 'Browse catalogue'}
                  </p>
                </div>
              </Card>
            )
            if (btn.external) {
              return (
                <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              )
            }
            return (
              <Link key={btn.label} to={btn.to} className="block">
                {content}
              </Link>
            )
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-surface-500">
          <span>Verified reseller</span>
          <span className="h-1 w-1 rounded-full bg-surface-700" />
          <span>Fast delivery</span>
          <span className="h-1 w-1 rounded-full bg-surface-700" />
          <span>Trusted since 2020</span>
        </div>
      </div>
    </section>
  )
}
