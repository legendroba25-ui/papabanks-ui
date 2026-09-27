import { Search, X } from 'lucide-react'
import Input from '../ui/Input'

export default function SearchBar({ value, onChange, placeholder = 'Search accounts...' }) {
  return (
    <div className="relative">
      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400" />
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10"
      />
      {value && (
        <button onClick={() => onChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
          <X size={16} />
        </button>
      )}
    </div>
  )
}
