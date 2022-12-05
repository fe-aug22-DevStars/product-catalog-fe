import React from 'react';
import styles from './Burger.module.scss';
import favourites from '../../images/Favourites.svg';
import shoppingBag from '../../images/ShoppingBag.svg';
import { NavLink } from 'react-router-dom';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
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
          <NavLink to="favourites" className={styles.footer__icon}>
            <img src={favourites} alt="icon" />
          </NavLink>

          <NavLink to="cart" className={styles.footer__icon}>
            <img src={shoppingBag} alt="icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
