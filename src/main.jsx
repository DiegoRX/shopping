import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Landing from './Landing'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import { Provider } from 'react-redux'
import { store } from './redux/store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
