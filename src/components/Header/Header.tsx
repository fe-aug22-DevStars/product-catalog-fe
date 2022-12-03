import React, { useState } from 'react';

import styles from './Header.module.scss';
import Logo from '../../images/NiceGadgets.svg';
import ok from '../../images/ok.svg';
import menu from '../../images/Menu.svg';
import cancel from '../../images/cancel.svg';
import favourites from '../../images/Favourites.svg';
import cart from '../../images/ShoppingBag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const [open, setOpen] = useState(false);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.header__container}>
          <NavLink to="/" className={styles.logo}>
            <img src={Logo} alt="Logo" />
            <img src={ok} alt="Logo" className={styles.header__okIcon} />
          </NavLink>

          <nav className="nav">
            <ul className={styles.nav__list}>
              <li>
                <NavLink to="/" className={`${styles.nav__link} colorGrey`}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="phones"
                  className={`${styles.nav__link} ${styles['is-active']} colorGrey`}
                >
                  Phones
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="tablets"
                  className={`${styles.nav__link} colorGrey`}
                >
                  Tablets
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="accessories"
                  className={`${styles.nav__link} colorGrey`}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.buttons}>
          <NavLink to="favourites" className={`${styles.buttons__button}`}>
            <img src={favourites} alt="icon" />
          </NavLink>

          <NavLink
            to="menu"
            className={styles.buttons__button}
            onClick={toggleMenu}
          >
            {!open ? (
              <img src={menu} alt="icon" />
            ) : (
              <img src={cancel} alt="icon" />
            )}
          </NavLink>

          <NavLink to="cart" className={styles.buttons__button}>
            {!open
              ? <img src={menu} alt="icon" />
              : <img src={cancel} alt="icon" />
            }
          </NavLink>
          
            <img src={cart} alt="icon" />
          </NavLink>
        </div>
      </header>
      {open && <BurgerMenu open={open} />}
    </>
  );
};
