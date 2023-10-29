import { getArtworksItemsResponse } from './types/types';

const url = 'https://api.artic.edu/api/v1/artworks';
const getParams = '?page=1';

export const getItems = async () => {
  try {
    const response = await fetch(url + getParams);
    const data = (await response.json()) as getArtworksItemsResponse;
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const searchItems = async (findValue: string) => {
  const searchUrl = 'https://api.artic.edu/api/v1/artworks/search';
  const searchParams = `?q=${findValue.trim()}`;
  try {
    const response = await fetch(searchUrl + searchParams);
    const data = (await response.json()) as getArtworksItemsResponse;
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
