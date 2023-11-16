import { getArtworksItemsResponse } from '../types/types';

export const getItems = async (page: number = 1) => {
  const url = 'https://api.artic.edu/api/v1/artworks';
  const limit = Number(localStorage.getItem('Items count'));
  try {
    const response = await fetch(`${url}?page=${page}&limit=${limit || 12}`);
    const data = (await response.json()) as getArtworksItemsResponse;
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const searchItems = async (findValue: string, page: number = 1) => {
  const searchUrl = 'https://api.artic.edu/api/v1/artworks/search';
  const limit = Number(localStorage.getItem('Items count'));
  const searchParams = `?limit=${
    limit || 12
  }&q=${findValue.trim()}&page=${page}`;
  try {
    const response = await fetch(searchUrl + searchParams);
    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
