import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card'
import { formatPrice, faviconUrl } from '../../data/products'

export default function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Card hover className="group flex flex-col">
      <Link to={`/products/${product.id}`} className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-100 dark:bg-surface-800 overflow-hidden ring-1 ring-surface-200 dark:ring-surface-700">
            {!imgFailed ? (
              <img
                src={faviconUrl(product.domain, 64)}
                alt={product.name}
                className="h-7 w-7 object-contain"
                loading="lazy"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="text-sm font-bold text-surface-600 dark:text-surface-300">
                {product.initials}
              </span>
            )}
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-surface-400 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <h3 className="mt-4 text-base font-semibold text-surface-900 dark:text-white leading-snug">
          {product.name}
        </h3>
      </Link>

      <div className="border-t border-surface-100 dark:border-surface-800 px-5 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-surface-900 dark:text-white">
          {formatPrice(product.price)}
        </span>
        <Link
          to={`/products/${product.id}`}
          className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
        >
          View →
        </Link>
      </div>
    </Card>
  )
}
