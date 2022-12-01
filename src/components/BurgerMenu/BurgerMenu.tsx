import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Burger.module.scss';

type Props = {
    open: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ open }) => {
    return (
        <>
            <Header />
            <nav className={styles.menu}>
                <ul className={open ? "show" : ""}>

                    <li className='menu__item'>
                        <a href="/" className='menu__link'>Home</a>
                    </li>
                    <li className='menu__item'><a href="#" className='menu__link'>Home</a></li>
                    <li className='menu__item'><a href="#" className='menu__link'>Home</a></li>
                    <li className='menu__item'></li>

                </ul>
            </nav>
            <Footer />
        </>

    )
}