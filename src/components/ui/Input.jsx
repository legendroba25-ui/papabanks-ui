import clsx from 'clsx'

export default function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 px-4 py-2.5 text-sm text-surface-900 dark:text-surface-100 placeholder:text-surface-400 dark:placeholder:text-surface-500',
        'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200',
        className
      )}
      {...props}
    />
  )
}
