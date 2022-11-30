import React from 'react';
import { ProductCard } from './components/ProductCard';
import './styles/main.scss';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <header className='colorPurple'>
        DevStars
      </header>
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
