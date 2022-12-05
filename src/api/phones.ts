import { Phone } from '../types/Phone';

// eslint-disable-next-line max-len
const BASE_URL = 'https://delightful-granita-7b1065.netlify.app/.netlify/functions/server/products';

export const getAllPhones = async(): Promise<Phone[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getPhones = async(phonesAmount: number, pageId: number): Promise<{
  'products': Phone[]
  'numberOfPages': number
}> => {
  const response = await fetch(`${BASE_URL}/${phonesAmount}/${pageId}`);

  return response.json();
};

export const getFavourites = async(phoneIds: string) => {
  const response = await fetch(`${BASE_URL}/${phoneIds}`);

  return response.json();
};
