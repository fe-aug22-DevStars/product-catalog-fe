import React, { useState, useEffect, useContext } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/Menu.svg';
import cancel from '../../assets/images/cancel.svg';
import favourites from '../../assets/images/Favourites.svg';
import cart from '../../assets/images/ShoppingBag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import { StorageContext } from '../../context/StorageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favouritesAmount, setFavouritesAmount] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const { toFavourites, toCart } = useContext(StorageContext);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setFavouritesAmount(toFavourites.length);
  }, [toFavourites]);

  useEffect(() => {
    setCartAmount(toCart.length);
  }, [toCart]);

  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.header__container}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Nice gadgets logo" />
          </Link>

          <nav className="nav">
            <ul className={styles.nav__list}>
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    cn(`${styles.nav__link} colorGrey`, {
                      [styles['is-active']]: isActive,
                    })
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/phones'}
                  className={({ isActive }) =>
                    cn(`${styles.nav__link} colorGrey`, {
                      [styles['is-active']]: isActive,
                    })
                  }
                >
                  Phones
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/tablets'}
                  className={({ isActive }) =>
                    cn(`${styles.nav__link} colorGrey`, {
                      [styles['is-active']]: isActive,
                    })
                  }
                >
                  Tablets
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/accessories'}
                  className={({ isActive }) =>
                    cn(`${styles.nav__link} colorGrey`, {
                      [styles['is-active']]: isActive,
                    })
                  }
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.buttons}>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              cn(styles.buttons__button, { [styles['is-active']]: isActive })
            }
          >
            <img src={favourites} className={styles.icon} alt="icon" />
            {favouritesAmount > 0 && (
              <span className={styles.counter}>
                {favouritesAmount}
              </span>
            )}
          </NavLink>

          <div
            className={styles.buttons__button}
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <img src={menu} alt="icon" />
            ) : (
              <img src={cancel} alt="icon" />
            )}
          </div>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles.buttons__button, { [styles['is-active']]: isActive })
            }
          >

            <img src={cart} alt="icon" className={styles.icon}/>
            {cartAmount > 0 && (
              <span className={styles.counter}>
                {cartAmount}
              </span>
            )}
          </NavLink>
        </div>
      </header>
      {isMenuOpen && (
        <BurgerMenu setIsMenuOpen={setIsMenuOpen}/>
      )}
    </>
  );
};
