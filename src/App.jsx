import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import UK from './pages/UK'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="uk" element={<UK />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}
