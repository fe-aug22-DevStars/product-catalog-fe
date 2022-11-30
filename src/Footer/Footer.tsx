import React from 'react';
import './footer_styles/Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer className='page__footer footer'>
            <div className='footer__container'>
                <div className='footer__text-container'>
                    <a href="#" className='footer__text'>GITHUB</a>
                    <a href="#" className='footer__text footer__text-mobile'>CONTACTS</a>
                    <a href="#" className='footer__text'>RIGHTS</a>
                </div>

                <div className='footer__up-container'>
                    <p className='footer__text footer__text-up'>
                        Back to top
                    </p>
                    <a href="#header" className='footer__up'>
                    </a>
                </div>

            </div>
        </footer>

    )
}
