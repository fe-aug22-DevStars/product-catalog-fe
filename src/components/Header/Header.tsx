import './Header.scss'
import Logo from '../../images/NiceGadgets.svg';
import ok from '../../images/ok.svg'
import menu from '../../images/Menu.svg'
import favourites from '../../images/Favourites.svg';

export const Header: React.FC = () => (
  <header className="header">
    <div className="header__container">
      <a href="#home" className="logo">
        <img src={Logo} alt="Nice gadgets logo" />
        <img src={ok} alt="Logo" className='footer__logo-ok' />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="#home" className='nav__link is-active'>
              Home
            </a>
          </li>

          <li>
            <a href="#phones" className='nav__link'>
              Phones
            </a>
          </li>

          <li>
            <a href="#tablets" className='nav__link'>
              Tablets
            </a>
          </li>

          <li>
            <a href="#accesories" className='nav__link'>
              Accesories
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="buttons">
      <a href="#favourites" className="buttons__button favourites-button">
        <img src={favourites} alt="icon" />
      </a>
      <a href="#home" className="buttons__button">
        <img src={menu} alt="icon" />
      </a>
    </div>
  </header>
);