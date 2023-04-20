import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from '../ProductCard/ProductCard.module.scss';
import { StorageContext } from '../../context/StorageContext';

type Props = {
  id: string;
}

export const FavouritesButton: React.FC<Props> = ({ id }) => {
  const {
    toFavourites,
    setToFavourites,
  } = useContext(StorageContext);

  return (
    <div
      onClick={() => {
        setToFavourites(id);
      }}
      className={classNames(styles.favourites, {
        [styles.favourites_active]: toFavourites.includes(id),
      })}
    ></div>
  );
};
