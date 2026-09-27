import { useMemo, useState } from 'react'
import { Briefcase, Landmark, Bitcoin, LayoutGrid } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductGrid from '../components/product/ProductGrid'
import SearchBar from '../components/product/SearchBar'

const categoryIcons = {
  all: { icon: LayoutGrid, tone: 'brand' },
  business: { icon: Briefcase, tone: 'amber' },
  neobanks: { icon: Landmark, tone: 'sky' },
  crypto: { icon: Bitcoin, tone: 'violet' },
}

const toneClasses = {
  brand: 'bg-brand-100 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  sky: 'bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
  violet: 'bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
}

export default function Products() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const c = { all: PRODUCTS.length }
    CATEGORIES.forEach(cat => { c[cat.id] = PRODUCTS.filter(p => p.category === cat.id).length })
    return c
  }, [])

  const filtered = useMemo(() => {
    let list = PRODUCTS
    if (active !== 'all') list = list.filter(p => p.category === active)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q))
    }
    return list
  }, [query, active])

  const tiles = [{ id: 'all', label: 'All Products' }, ...CATEGORIES]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-surface-900 dark:text-white sm:text-4xl">Available Products</h1>
        <p className="mt-2 text-sm text-surface-500 dark:text-surface-400 max-w-2xl">
          Our full catalogue is updated regularly. Some products may not be listed, but we can still provide them on request.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map(t => {
          const Icon = categoryIcons[t.id]?.icon || LayoutGrid
          const tone = categoryIcons[t.id]?.tone || 'brand'
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`group flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                isActive
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10 shadow-lg shadow-brand-500/10'
                  : 'border-surface-200 bg-white hover:border-surface-300 hover:bg-surface-50 dark:border-surface-800 dark:bg-surface-900/40 dark:hover:border-surface-700 dark:hover:bg-surface-900'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
                  <Icon size={16} />
                </span>
                <span className={`text-xs font-semibold ${isActive ? 'text-brand-600 dark:text-brand-300' : 'text-surface-400 dark:text-surface-500'}`}>
                  {counts[t.id]}
                </span>
              </div>
              <span className={`text-sm font-semibold leading-tight ${isActive ? 'text-surface-900 dark:text-white' : 'text-surface-600 dark:text-surface-300'}`}>
                {t.label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-surface-500 dark:text-surface-400">
          Showing <span className="font-semibold text-surface-900 dark:text-white">{filtered.length}</span> {filtered.length === 1 ? 'product' : 'products'}
        </p>
        <div className="w-full sm:max-w-xs">
          <SearchBar value={query} onChange={setQuery} placeholder="Search products..." />
        </div>
      </div>

      <ProductGrid products={filtered} />
    </div>
  )
}
