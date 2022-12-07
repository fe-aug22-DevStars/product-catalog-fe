import { Link } from 'react-router-dom';
import style from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={`${style.errorPage} colorYellow`}>
      <p className={style.message}>Ooops...</p>
      <p>
        Page not found <br /> Error 404
      </p>
      <Link to="/" className={`${style.homeLink} colorPurple`}>
        Home
      </Link>
    </div>
  );
};
