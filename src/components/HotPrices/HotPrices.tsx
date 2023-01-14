import React, { useEffect, useState } from 'react';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sliders } from '../Slider';
import { Loader } from '../Loader';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadPhones(): Promise<any> {
    try {
      setIsLoading(true);

      const responseFromServer = await getAllPhones();
      const filteredPhones = responseFromServer
        .filter(phone => phone.price % 2 !== 0).slice(0, 9);

      setPhones(filteredPhones);
    } catch (error) {
      throw new Error('No phones loaded');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <>
      {isLoading && <Loader /> }

      {!isLoading
            && <Sliders phones={phones} title={'Hot Prices'}/>
      }
    </>
  );
};
