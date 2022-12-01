import React from 'react'
import './styles/main.scss'
import { Footer } from './components/Footer'
import { ProductCatalog } from './components/ProductCatalog'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductCatalog />
      <Footer />
    </div>
  )
}

export default App
