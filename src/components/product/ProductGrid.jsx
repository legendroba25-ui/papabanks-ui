import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-surface-200 dark:border-surface-700 p-12 text-center">
        <p className="text-sm text-surface-500 dark:text-surface-400">No accounts match your filters.</p>
      </div>
    )
  }
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
