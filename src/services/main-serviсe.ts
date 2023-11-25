import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArtworkDetails, getArtworksItemsResponse } from '../types/types';
import { HYDRATE } from 'next-redux-wrapper';

export const getAllItemsAPI = createApi({
  reducerPath: 'getAllItemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getArtworkItems: build.query<getArtworksItemsResponse, number[]>({
      query: ([page = 1, limit]) => ({
        url: '/artworks',
        params: {
          page: page,
          limit,
        },
      }),
    }),
    getSearchArtworkItems: build.query<getArtworksItemsResponse, string[]>({
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
    getItem: build.query<ArtworkDetails, number>({
      query: (id) => ({
        url: `/artworks/${id}`,
      }),
    }),
  }),
});

export const {
  useGetArtworkItemsQuery,
  useGetSearchArtworkItemsQuery,
  util: { getRunningQueriesThunk },
} = getAllItemsAPI;

export const { getArtworkItems, getSearchArtworkItems } =
  getAllItemsAPI.endpoints;
export const { getItem } = getItemAPI.endpoints;
