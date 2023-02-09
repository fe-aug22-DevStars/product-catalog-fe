import { Phone } from '../types/Phone';
import { ProductFullSpecs } from '../types/ProductFullSpecs';

// const BASE_URL = 'https://device-shop.onrender.com/products';
const BASE_URL = 'http://localhost:5000/products';

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

export const getSingleProductById
  = async(productId: string): Promise<ProductFullSpecs> => {
    const response = await fetch(`${BASE_URL}/${productId}`);

    return response.json();
  };
