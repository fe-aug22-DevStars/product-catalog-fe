import { ShopCategories } from '../ShopCategories';
import { HotPrices } from '../HotPrices';
import { NewModels } from '../newModels';
import { GreetingSlider } from '../GreetingSlider';

export const HomePage = () => {
  return (
    <>
      <GreetingSlider />
      <NewModels />
      <ShopCategories />
      <HotPrices />
    </>

  );
};
