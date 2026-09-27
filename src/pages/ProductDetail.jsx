import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Send, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import { getProductById, formatPrice, faviconUrl, LINKS } from '../data/products'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [imgFailed, setImgFailed] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Product not found</h1>
        <Button to="/products" variant="outline" className="mt-6">Back to products</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-brand-600 transition-colors">
        <ArrowLeft size={16} /> Back to all products
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface-100 dark:bg-surface-800 overflow-hidden ring-1 ring-surface-200 dark:ring-surface-700">
              {!imgFailed ? (
                <img
                  src={faviconUrl(product.domain, 128)}
                  alt={product.name}
                  className="h-10 w-10 object-contain"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <span className="text-lg font-bold text-surface-600 dark:text-surface-300">
                  {product.initials}
                </span>
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                {product.category.replace('uk-', '').replace('-', ' ')}
              </p>
              <h1 className="mt-1 text-3xl font-bold text-surface-900 dark:text-white sm:text-4xl">
                {product.name}
              </h1>
            </div>
          </div>

          <Card className="p-6">
            <h2 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider">Delivery & Support</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Truck, title: 'Fast delivery', desc: 'Most accounts within 24h' },
                { icon: ShieldCheck, title: 'Verified', desc: 'Full documentation included' },
                { icon: MessageCircle, title: 'Support', desc: 'Post-purchase assistance' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon size={18} className="text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-surface-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-surface-500 dark:text-surface-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-6 sticky top-24">
            <p className="text-sm text-surface-500 dark:text-surface-400">Price</p>
            <p className="mt-1 text-4xl font-bold text-surface-900 dark:text-white">{formatPrice(product.price)}</p>
            <p className="mt-1 text-xs text-surface-400">One-time purchase. No recurring fees.</p>

            <div className="mt-6 space-y-3">
              <Button href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="w-full" size="lg">
                <MessageCircle size={18} /> Contact to Buy
              </Button>
              <Button href={LINKS.channel} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full" size="lg">
                <Send size={18} /> Join Channel
              </Button>
            </div>

            <div className="mt-6 rounded-xl bg-surface-50 dark:bg-surface-800/50 p-4">
              <p className="text-xs text-surface-500 dark:text-surface-400">
                Need a custom setup or a product not listed?{' '}
                <a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">
                  Message us on Telegram
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
