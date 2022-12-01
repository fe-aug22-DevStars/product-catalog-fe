import React from 'react';
import './styles/main.scss';
import { Footer } from './components/Footer';
import { Catalog } from './components/Catalog';
import { Header } from './components/Header'


function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
