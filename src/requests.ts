import { getArtworksItemsResponse } from './types/types';

const url = 'https://api.artic.edu/api/v1/artworks';
const params = '?limit=6&current_page=1';

export const getItems = async () => {
  const response = await fetch(url + params);
  const data = (await response.json()) as getArtworksItemsResponse;
  return data;
};
