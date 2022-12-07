import React from 'react';

import styles from './Pagination.module.scss';
import arrowLeft from '../../images/ArrowLeft.svg';
import arrowRight from '../../images/ArrowRight.svg';
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

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick
    // eslint-disable-next-line max-len,no-shadow
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
      <a href="/">
        <img
          src={arrowLeft}
          alt="Left"
          className={styles.bottomMenuArrow}
          onClick={e => {
            handleClickPrev(e, currentPage);
          }}
        />
      </a>
      {pageNumbers.map(number => (
        <a
          href={`/phones/?page=${number}`}
          key={number}
          className={
            classNames(styles.bottomMenuItem,
              { [styles.isActive]: (currentPage === number) })}
          onClick={(e) => {
            handleClick(e, number);
          }}
        >
          {number}
        </a>
      ))}
      <a href="/">
        <img
          src={arrowRight}
          alt="Right"
          className={styles.bottomMenuArrow}
          onClick={e => {
            handleClickNext(e, currentPage);
          }}
        />
      </a>
    </div>
  );
};
