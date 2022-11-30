import React from 'react';
import './footer_styles/Footer.scss';
import Up from '../../src/img/Up.svg'
import Logo from '../../src/images/NiceGadgets.svg'
import ok from '../../src/img/ok.svg'

export const Footer: React.FC = () => {
    return (
        <footer className='page__footer footer'>
            <div className='footer__container'>
                <div className='footer__logo-container'>
                <img src={Logo} alt="Logo" className='footer__logo'/>
                <img src={ok} alt="Logo" className='footer__logo-ok'/>

                </div>
            
          
                <div className='footer__text-container'>
                    <a href="/" className='footer__text'>GITHUB</a>
                    <a href="/" className='footer__text footer__text-mobile'>CONTACTS</a>
                    <a href="/" className='footer__text'>RIGHTS</a>
                </div>

                <div className='footer__up-container'>
                    <p className='footer__text footer__text-up'>
                        Back to top
                    </p>
                    <a href="#header" className='footer__up'>
                    <img src={Up} alt="Up"  className='footer__up-logo'/>
                    </a>
                </div>

            </div>
        </footer>

    )
}
