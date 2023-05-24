import { CardData } from '../modules/showMoreElements.ts';

export const postData = async (
  url: string,
  formData: FormData
): Promise<string> => {
  const object: { [key: string]: string } = {};
  formData.forEach((value, key) => (object[key] = value.toString()));
  const body = JSON.stringify(object);
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  return await result.text();
};

export const getData = async (url: string): Promise<CardData[]> => {
  let result = await fetch(url);
  console.log(result)

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  return await result.json();
};
