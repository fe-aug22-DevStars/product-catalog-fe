import React from 'react';
import './styles/main.scss';
import { ProductCard } from './ProductCard';

function App() {
  return (
    <div>
      <header className='colorPurple'>
        DevStars
      </header>
      <ProductCard />
    </div>
  );
}

export default App;
