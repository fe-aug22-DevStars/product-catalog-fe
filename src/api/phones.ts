import { Phone } from '../types/Phone';

// eslint-disable-next-line max-len
const BASE_URL = 'https://delightful-granita-7b1065.netlify.app/.netlify/functions/server/products';
// const BASE_URL = 'http://localhost:9000/.netlify/functions/server/products';

export interface Req {
  'products': Phone[]
  'numberOfPages': number
  'numberOfProducts': number
}

export const getAllPhones = async(): Promise<Phone[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getPhones = async(
  phonesAmount: string,
  pageId: number,
  sortBy: string,
): Promise<Req> => {
  const response = await fetch(`${BASE_URL}/${phonesAmount}/${pageId}/${sortBy}`);

  return response.json();
};

export const getPhonesByIds = async(phoneIds: string): Promise<Phone[]> => {
  const response = await fetch(`${BASE_URL}/${phoneIds}`);

  return response.json();
};
