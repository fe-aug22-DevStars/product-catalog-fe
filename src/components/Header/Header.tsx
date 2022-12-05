import React, { useState } from 'react';

import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import menu from '../../images/Menu.svg';
import cancel from '../../images/cancel.svg';
import favourites from '../../images/Favourites.svg';
import cart from '../../images/ShoppingBag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                  to={'/accesories'}
                  className={({ isActive }) =>
                    cn(`${styles.nav__link} colorGrey`, {
                      [styles['is-active']]: isActive,
                    })
                  }
                >
                  Accesories
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
            <img src={favourites} alt="icon" />
          </NavLink>

          <NavLink
            to="menu"
            className={styles.buttons__button}
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <img src={menu} alt="icon" />
            ) : (
              <img src={cancel} alt="icon" />
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles.buttons__button, { [styles['is-active']]: isActive })
            }
          >
            <img src={cart} alt="icon" />
          </NavLink>
        </div>
      </header>
      {isMenuOpen && (
        <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
};
