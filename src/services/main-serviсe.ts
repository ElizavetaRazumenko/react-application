import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArtworkDetails, getArtworksItemsResponse } from '../types/types';

export const getAllItemsAPI = createApi({
  reducerPath: 'getAllItemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1',
  }),
  endpoints: (build) => ({
    fetchResultItems: build.query<getArtworksItemsResponse, number[]>({
      query: ([page = 1, limit]) => ({
        url: '/artworks',
        params: {
          page: page,
          limit,
        },
      }),
    }),
  }),
});

export const getSearchItemsAPI = createApi({
  reducerPath: 'getSearchItemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1',
  }),
  endpoints: (build) => ({
    fetchResultItems: build.query<getArtworksItemsResponse, string[]>({
      query: ([value, page, limit]) => ({
        url: '/artworks/search',
        params: {
          q: value.trim(),
          page: page,
          limit,
        },
      }),
    }),
  }),
});

export const getItemAPI = createApi({
  reducerPath: 'getSearchItemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1',
  }),
  endpoints: (build) => ({
    fetchResultItems: build.query<ArtworkDetails, number>({
      query: (id) => ({
        url: `/artworks/${id}`,
      }),
    }),
  }),
});
