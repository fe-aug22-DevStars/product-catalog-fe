import React, { useContext, useEffect, useState } from 'react';
import styles from './Burger.module.scss';
import favourites from '../../images/Favourites.svg';
import shoppingBag from '../../images/ShoppingBag.svg';
import { NavLink } from 'react-router-dom';
import { StorageContext } from '../../context/StorageContext';

interface Props {
  setIsMenuOpen: (arg: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const [favouritesAmount, setFavouritesAmount] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const { toFavourites, toCart } = useContext(StorageContext);

  useEffect(() => {
    setFavouritesAmount(toFavourites.length);
  }, [toFavourites]);

  useEffect(() => {
    setCartAmount(toCart.length);
  }, [toCart]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.menu__content}>
            <li className={styles.menu__item}>
              <NavLink
                to="/"
                className={styles.menu__link}
                onClick={() => closeMenu()}
              >
                HOME
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to="phones"
                className={styles.menu__link}
                onClick={() => closeMenu()}
              >
                PHONES
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to="tablets"
                className={styles.menu__link}
                onClick={() => closeMenu()}
              >
                TABLETS
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to="accessories"
                className={styles.menu__link}
                onClick={() => closeMenu()}
              >
                ACCESSORIES
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footer__block}>
          <NavLink
            to="favourites"
            className={styles.footer__icon}
            onClick={() => closeMenu()}
          >
            <img src={favourites} alt="icon" />
            {favouritesAmount > 0 && (
              <span className={styles.counter}>
                {favouritesAmount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="cart"
            className={styles.footer__icon}
            onClick={() => closeMenu()}
          >
            <img src={shoppingBag} alt="icon" />
            {cartAmount > 0 && (
              <span className={styles.counter}>
                {cartAmount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
