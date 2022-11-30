import React from 'react';
import './styles/main.scss';
import { Footer } from './components/Footer';
import { Catalog } from './components/Catalog';


function App() {
  return (
    <div>
      <header className='colorPurple'>
        DevStars
      </header>
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
