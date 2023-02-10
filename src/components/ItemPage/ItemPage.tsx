import React, { useState, useEffect } from 'react';
import styles from './ItemPage.module.scss';
import { ProductGallerySwiper } from '../ProductGalerySwiper';
import homeIcon from '../../images/Home.svg';
import arrowRight from '../../images/ArrowRight.svg';
import cn from 'classnames';
import { formatCapacity } from '../../utilities/formatCapacity';
import { AboutProduct } from '../AboutProduct';
import { getSingleProductById } from '../../api/phones';
import { Navigate, useLocation } from 'react-router-dom';
import { ProductFullSpecs } from '../../types/ProductFullSpecs';
import { Loader } from '../Loader';
import { Button } from '../Button';
import { FavouritesButton } from '../FavouritesButton/FavouritesButton';

export const ItemPage = () => {
  const [hasError, setHasError] = useState(false);
  const [phoneInfo, setPhoneInfo] = useState<ProductFullSpecs | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [memoryCapacity, setMemoryCapacity]
    = useState<string | undefined>(phoneInfo?.capacity);

  const loc = useLocation();
  const query = loc.pathname.toString().slice(9);

  const getPhone = async() => {
    try {
      const product = await getSingleProductById(query);

      setPhoneInfo(product);
      setMemoryCapacity(product.capacity);
      setSelectedColor(product.color);
    } catch (error: any) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getPhone();
  }, [location.pathname]);

  const handleChangeColor = (newColor: string) => {
    setSelectedColor(newColor);
  };

  const handleCapacity = (newCapacity: string) => {
    setMemoryCapacity(newCapacity);
  };

  if (hasError) {
    return (<Navigate to="/not-found"/>);
  }

  return (
    phoneInfo
      ? (<div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.topMenu}>
            <a href="/">
              <img src={homeIcon} alt="Home"/>
            </a>
            <img src={arrowRight} alt="Next"/>
            <span className={styles.category__name}>{phoneInfo.name}</span>
          </div>

          <div className={styles.main}>
            <h1 className={styles.title}>{phoneInfo.name}</h1>

            <div className={styles.visual_block}>
              <div className={styles.gallery}>
                <ProductGallerySwiper images={phoneInfo.images}/>
              </div>

              <div className={styles.info_block}>
                <div>
                  <p className={styles.paragraph}>Available colors</p>
                  <div className={styles.colors_list}>
                    {phoneInfo?.colorsAvailable.map(color => (
                      <button
                        className={cn([styles.colors_button], {
                          [styles.isColorSelected]: selectedColor === color,
                        })}
                        style={{ background: color }}
                        onClick={() => handleChangeColor(color)}
                        key={color}
                      >
                      </button>
                    ))}
                  </div>
                  <hr className={styles.lines}/>
                </div>
                <div>
                  <p className={styles.paragraph}>Select capacity</p>
                  <div className={styles.capacity_list}>
                    {phoneInfo?.capacityAvailable.map(capacity => (
                      <button
                        className={cn([styles.capacity_block], {
                          [styles.capacityIsActive]: capacity
                          === memoryCapacity,
                        })}
                        key={capacity}
                        onClick={() => handleCapacity(capacity)}
                      >
                        {capacity}
                      </button>
                    ))}
                  </div>
                  <hr className={styles.lines}/>
                </div>
                <div className={styles.prices}>
                  <p className={styles.price}>${phoneInfo.priceDiscount}</p>
                  <p className={styles.full_price}>${phoneInfo.priceRegular}</p>
                </div>

                <div className={styles.buttons}>
                  <Button id={phoneInfo.id}/>

                  <FavouritesButton id={phoneInfo.id} />
                </div>

                <div className={styles.specification}>
                  <div>
                    <p className={styles.paragraph}>Screen</p>
                    <p className={styles.paragraph}>Resolution</p>
                    <p className={styles.paragraph}>Processor</p>
                    <p className={styles.paragraph}>RAM</p>
                  </div>

                  <div>
                    <p className={styles.nums}>{phoneInfo.screen}</p>
                    <p className={styles.nums}>{phoneInfo.resolution}</p>
                    <p className={styles.nums}>{phoneInfo.processor}</p>
                    <p className={styles.nums}>
                      {formatCapacity(phoneInfo.capacity)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AboutProduct ProductFullSpecs={phoneInfo}/>
          </div>
        </div>
      </div>)
      : (<Loader/>)
  );
};
