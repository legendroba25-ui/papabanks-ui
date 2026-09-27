import { CATEGORIES } from '../../data/products'
import clsx from 'clsx'

export default function FilterSidebar({ active, onChange, counts }) {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider">Category</h3>
        <div className="mt-3 space-y-1">
          <button
            onClick={() => onChange('all')}
            className={clsx(
              'w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              active === 'all'
                ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
            )}
          >
            All Accounts <span className="text-xs">{counts.all}</span>
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => onChange(c.id)}
              className={clsx(
                'w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                active === c.id
                  ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300'
                  : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
              )}
            >
              {c.label} <span className="text-xs">{counts[c.id] || 0}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
