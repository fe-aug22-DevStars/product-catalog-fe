import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';
import { Favourites } from './components/Favourites';

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='phones' element={<Catalog />} />
        <Route path='favourites' element={<Favourites />} />
      </Routes>

      <Footer />
      <Cart />
    </div>
  );
};

export default App;
