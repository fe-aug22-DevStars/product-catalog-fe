import React from 'react';
import { Link } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import arrowLeft from '../../images/ArrowLeft.svg';
import arrowRight from '../../images/ArrowRight.svg';
import dots from '../../images/more.png';
import classNames from 'classnames';

interface Props {
  pageChange: (pageNumber: number) => any
  numberOfPages: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({
  pageChange,
  numberOfPages,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= numberOfPages) {
      pageNumbers.push(i);
    }
  }

  const handleClick
  // eslint-disable-next-line max-len, no-shadow
    = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, number: number): void => {
      event.preventDefault();
      pageChange(number);
    };

  const handleClickPrev
  // eslint-disable-next-line max-len, no-shadow
    = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, number: number): void => {
      event.preventDefault();

      if (number > 1) {
        pageChange(number - 1);
      }
    };

  const handleClickNext
  // eslint-disable-next-line max-len, no-shadow
    = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, number: number): void => {
      event.preventDefault();

      if (number < numberOfPages) {
        pageChange(number + 1);
      }
    };

  return (
    <div className={styles.bottomMenu}>
      <Link to="/" >
        <img
          src={arrowLeft}
          alt="Left"
          className={styles.bottomMenuArrow}
          onClick={e => {
            handleClickPrev(e, currentPage);
          }}
        />
      </Link>
      <Link to='/' >
        <img
          src={dots}
          alt="Left"
          className={styles.bottomMenuItem}
          onClick={e => {
            handleClickPrev(e, currentPage);
          }}
        />
      </Link>
      {pageNumbers.map(number =>
        <Link
          to="/"
          key={number}
          className={
            classNames(styles.bottomMenuItem,
              { [styles.isActive]: (currentPage === number) })}
          onClick={(e) => {
            handleClick(e, number);
          }}
        >
          {number}
        </Link>)
      }
      <Link to='/' >
        <img
          src={dots}
          alt="Right"
          className={styles.bottomMenuItem}
          onClick={e => {
            handleClickNext(e, currentPage);
          }}
        />
      </Link>
      <Link to="/">
        <img
          src={arrowRight}
          alt="Right"
          className={styles.bottomMenuArrow}
          onClick={e => {
            handleClickNext(e, currentPage);
          }}
        />
      </Link>
    </div>
  );
};
