import React, { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const StorageContext = React.createContext({
  toFavourites: [] as string[],
  setToFavourites: (phoneId: string) => {},
  toCart: [] as string[],
  setToCart: (phoneId: string) => {},
});

type Props = {
  children: ReactNode;
};

export const StorageProvider: React.FC<Props> = ({ children }) => {
  const [toFavourites, setToFavourites] = useLocalStorage('favourites');
  const [toCart, setToCart] = useLocalStorage('cart');

  const contextValue = {
    toFavourites,
    setToFavourites,
    toCart,
    setToCart,
  };

  return (
    <StorageContext.Provider value={contextValue}>
      { children }
    </StorageContext.Provider>
  );
};
