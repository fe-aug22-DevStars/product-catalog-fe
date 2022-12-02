import { Phone } from '../types/Phone'

const BASE_URL = 'https://delightful-granita-7b1065.netlify.app/.netlify/functions/server/products'
// const BASE_URL = 'http://localhost:9000/.netlify/functions/server/products'

export const getAllPhones = async (): Promise<Phone[]> => {
  const response = await fetch(BASE_URL)

  return await response.json()
}

export const getPhones = async (phonesAmount: number, pageId: number): Promise<{
  'products': Phone[]
  'numberOfPages': number
}> => {
  const response = await fetch(`${BASE_URL}/${phonesAmount}/${pageId}`)

  return await response.json()
}
