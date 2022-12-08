import React, { useEffect, useState } from 'react';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sliders } from '../Slider';

export const AlsoLike: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  async function loadPhones(): Promise<any> {
    const responseFromServer = await getAllPhones();
    const filteredPhones = responseFromServer
      .filter(phone => phone.price <= 800).slice(0, 9);

    setPhones(filteredPhones);
  }

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <Sliders phones={phones} title={'You may also like'}/>
  );
};
