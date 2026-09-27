import clsx from 'clsx'

export default function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-surface-200/80 dark:border-surface-800 bg-white dark:bg-surface-900/50 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-surface-900/5 dark:hover:shadow-black/20 hover:border-brand-200 dark:hover:border-brand-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
