import React from 'react';
import classNames from 'classnames';


import styles from './Footer.module.scss';
import Up from '../../images/Up.svg';
import Logo from '../../images/NiceGadgets.svg';
import ok from '../../images/ok.svg';
import '../../styles/fonts/FontsFree-Net-mont.ttf';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                    <img src={ok} alt="Logo" className={styles.logo_ok} />

                </div>


                <div className={styles.text_container}>
                    <a href="/" className={styles.text}>GITHUB</a>
                    <a href="/" className={classNames(styles.text, styles.text_mobile)}>CONTACTS</a>
                    <a href="/" className={styles.text}>RIGHTS</a>
                </div>

                <div className={styles.up_container}>
                    <p className={classNames(styles.text, styles.text_up)}>
                        Back to top
                    </p>
                    <a href="#header" className={styles.up}>
                        <img src={Up} alt="Up" className={styles.up_logo} />
                    </a>
                </div>

            </div>
        </footer>

    )
}
