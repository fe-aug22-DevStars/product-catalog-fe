import React from 'react';
import { ProductFullSpecs } from '../../types/ProductFullSpecs';
import styles from './AboutProduct.module.scss';

type Props = {
  ProductFullSpecs: ProductFullSpecs | null;
};

// eslint-disable-next-line no-shadow
export const AboutProduct: React.FC<Props> = ({ ProductFullSpecs }) => {
  return (
    <div className={styles.about_block}>
      <div className={styles.about}>
        <h3 className={styles.title}>About</h3>
        <hr className={styles.line} />
        <ul>
          {ProductFullSpecs?.description.map((paragraph) => (
            <li key={paragraph.title}>
              <h3 className={styles.subtitle}>{paragraph.title}</h3>
              {paragraph.text.map((elem) => (
                <p className={styles.text} key={elem.slice(4)}>
                  {elem}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.tech_specs}>
        <h3 className={styles.title}>Tech specs</h3>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li className={styles.specs}>
            <p className={styles.spec}>Screen</p>
            <p className={styles.numbers}>
              {ProductFullSpecs?.screen}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Resolution</p>
            <p className={styles.numbers}>
              {ProductFullSpecs?.resolution}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Processor</p>
            <p className={styles.numbers}>
              {ProductFullSpecs?.processor}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>RAM</p>
            <p className={styles.numbers}>
              {`${ProductFullSpecs?.ram.slice(0, -2)} ${ProductFullSpecs?.ram.slice(-2)}`}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Built in memory</p>
            <p className={styles.numbers}>
              {`${ProductFullSpecs?.capacity.slice(0, -2)} ${ProductFullSpecs?.capacity.slice(-2)}`}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Camera</p>
            <p className={styles.numbers}>
              {ProductFullSpecs?.camera}
            </p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Zoom</p>
            <p className={styles.numbers}>{ProductFullSpecs?.zoom}</p>
          </li>
          <li className={styles.specs}>
            <p className={styles.spec}>Cell</p>
            <p className={styles.numbers}>
              {ProductFullSpecs?.cell.join(', ')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
