import React from 'react'

import styles from './Pagination.module.scss'
import arrowLeft from '../../images/ArrowLeft.png'
import arrowRight from '../../images/ArrowRight.png'

interface Props {
  phonesPerPage: number
  totalPhones: number
  pageChange: (pageNumber: number) => any
}

export const Pagination: React.FC<Props> = ({ phonesPerPage, totalPhones, pageChange }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPhones / phonesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles.bottomMenu}>
        <a href="/">
          <img
            src={arrowLeft}
            alt="Left"
            className={styles.bottomMenuArrow}
          />
        </a>
        {pageNumbers.map(number => (
          <a
            href={`/phones=${number}`}
            key={number}
            className={styles.bottomMenuItem}
            onClick={() => {
              pageChange(number)
              console.log(number)
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
          />
        </a>
      </div>
  )
}
