import { Phone } from "../types/Phone";

const BASE_URL = 'https://delightful-granita-7b1065.netlify.app/.netlify/functions/server/products';

export const getAllPhones = async (): Promise<Phone[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getPaginated = async (phonesAmount: number, pageId: number): Promise<Phone[]> => {
  const response = await fetch(`${BASE_URL}/${phonesAmount}/${pageId}`);

  return response.json();
}