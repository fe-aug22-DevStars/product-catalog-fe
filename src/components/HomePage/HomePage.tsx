import { ShopCategories } from '../ShopCategories';
import { HotPrices } from '../HotPrices';
import { NewModels } from '../newModels';
import { GreetingSlider } from '../GreetingSlider';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to Nice Gadgets store!
      </h1>
      <GreetingSlider />
      <NewModels />
      <ShopCategories />
      <HotPrices />
    </>

  );
};
