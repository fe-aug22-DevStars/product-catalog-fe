import React from 'react';
import classNames from 'classnames';

import styles from './Footer.module.scss';
import Up from '../../images/Up.svg';
import Logo from '../../images/logo.svg';
import '../../styles/fonts/Mont-Bold.otf';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Link to='/' className={styles.logo_container}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.text_container}>
        <Link
          to="https://github.com/fe-aug22-DevStars/product-catalog-fe"
          className={styles.text}
        >
          GITHUB
        </Link>
        <Link
          to="/"
          className={classNames(styles.text, styles.text_mobile)}
        >
          CONTACTS
        </Link>
        <Link to="/" className={styles.text}>RIGHTS</Link>
      </div>

      <div className={styles.up_container}>
        <p className={classNames(styles.text, styles.text_up)}>
                      Back to top
        </p>
        <Link to="#header" className={styles.up}>
          <img src={Up} alt="Up" className={styles.up_logo} />
        </Link>
      </div>

    </div>
  </footer>
);
