import React, { useEffect, useState } from 'react';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sliders } from '../Slider';

export const NewModels:React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  async function loadPhones(): Promise<any> {
    const responseFromServer = await getAllPhones();
    const filteredPhones = responseFromServer
      .filter(phone => phone.fullPrice >= 1400).sort().slice(0, 9);

    setPhones(filteredPhones);
  }

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <Sliders phones={phones} title={'Brand new models'}/>
  );
};
