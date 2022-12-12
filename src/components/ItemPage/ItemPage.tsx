import React, { useState } from 'react';
import styles from './ItemPage.module.scss';
import { ProductGallerySwiper } from '../ProductGalerySwiper';
import homeIcon from '../../images/Home.svg';
import arrowRight from '../../images/ArrowRight.svg';
import cn from 'classnames';
import { formatCapacity } from '../../utilities/formatCapacity';
import { AboutProduct } from '../AboutProduct';

const demoData = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.jpg',
    'img/phones/apple-iphone-11/black/01.jpg',
    'img/phones/apple-iphone-11/black/02.jpg',
    'img/phones/apple-iphone-11/black/03.jpg',
    'img/phones/apple-iphone-11/black/04.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        // eslint-disable-next-line max-len
        'A transformative triple-camera system that adds tons of capability without complexity.',
        // eslint-disable-next-line max-len
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        // eslint-disable-next-line max-len
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
      // eslint-disable-next-line max-len
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        // eslint-disable-next-line max-len
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: '6.1\' IPS',
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const ItemPage = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [memoryCapacity, setMemoryCapacity]
    = useState<string | undefined>(demoData?.capacity);

  const handleChangeColor = (newColor: string) => {
    setSelectedColor(newColor);
  };

  const handleCapacity = (newCapacity: string) => {
    setMemoryCapacity(newCapacity);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <a href="/">
            <img src={homeIcon} alt="Home" />
          </a>
          <img src={arrowRight} alt="Next" />
          <span className={styles.category__name}>{demoData.name}</span>
        </div>

        <div className={styles.main}>
          <h1 className={styles.title}>{demoData.name}</h1>

          <div className={styles.visual_block}>
            <div className={styles.gallery}>
              <ProductGallerySwiper images={demoData.images}/>
            </div>

            <div className={styles.info_block}>
              <div>
                <p className={styles.paragraph}>Available colors</p>
                <div className={styles.colors_list}>
                  {demoData.colorsAvailable.map(color => (
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
                <hr className={styles.lines} />
              </div>
              <div>
                <p className={styles.paragraph}>Select capacity</p>
                <div className={styles.capacity_list}>
                  {demoData.capacityAvailable.map(capacity => (
                    <button
                      className={cn([styles.capacity_block], {
                        [styles.capacityIsActive]: capacity === memoryCapacity,
                      })}
                      key={capacity}
                      onClick={() => handleCapacity(capacity)}
                    >
                      {capacity}
                    </button>
                  ))}
                </div>
                <hr className={styles.lines} />
              </div>
              <div className={styles.prices}>
                <p className={styles.price}>${demoData.priceDiscount}</p>
                <p className={styles.full_price}>${demoData.priceRegular}</p>
              </div>

              <div className={styles.buttons}>

              </div>

              <div className={styles.specification}>
                <div>
                  <p className={styles.paragraph}>Screen</p>
                  <p className={styles.paragraph}>Resolution</p>
                  <p className={styles.paragraph}>Processor</p>
                  <p className={styles.paragraph}>RAM</p>
                </div>

                <div>
                  <p className={styles.nums}>{demoData.screen}</p>
                  <p className={styles.nums}>{demoData.resolution}</p>
                  <p className={styles.nums}>{demoData.processor}</p>
                  <p className={styles.nums}>
                    {formatCapacity(demoData.capacity)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <AboutProduct ProductFullSpecs={demoData}/>
        </div>
      </div>
    </div>
  );
};
