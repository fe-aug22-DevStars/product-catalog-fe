import React from 'react'
import './styles/main.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Catalog } from './components/Catalog'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  )
}

export default App
