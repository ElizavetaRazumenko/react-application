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
    getArtworkItem: build.query<ArtworkDetails, number>({
      query: (id) => ({
        url: `/artworks/${id}`,
      }),
    }),
  }),
});

export const {
  useGetArtworkItemsQuery,
  useGetSearchArtworkItemsQuery,
  useGetArtworkItemQuery,
  util: { getRunningQueriesThunk },
} = getAllItemsAPI;

export const { getArtworkItems, getSearchArtworkItems, getArtworkItem } =
  getAllItemsAPI.endpoints;
