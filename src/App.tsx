
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';
import { Favourites } from './components/Favourites';
import { HomePage } from './components/HomePage';
import { ErrorPage } from './components/ErrorPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='phones' element={<Catalog />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='cart' element={<Cart />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
