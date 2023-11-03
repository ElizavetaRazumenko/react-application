import {
  ArtworksItem,
  SendRequestParamsType,
  getArtworksItemsResponse,
} from '../types/types';

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
    const data = (await response.json()) as getArtworksItemsResponse;
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const sendRequest = async (params: SendRequestParamsType) => {
  params.setIsLoading(true);
  params.setCurrentPage(params.pageNumber);
  const searchResponse =
    params.value === ''
      ? await getItems(params.pageNumber)
      : await searchItems(params.value, params.pageNumber);
  params.setIsLoading(false);
  if (searchResponse) {
    params.setPaginationCount(searchResponse.pagination.total_pages);
    const artworks: ArtworksItem[] = searchResponse.data;
    const itemsInfo = artworks.map((artwork) => ({
      title: artwork.title,
      description: artwork.thumbnail?.alt_text || 'No description',
    }));
    params.setResultsItemInfo(itemsInfo);
  }
};
