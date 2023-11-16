import { getItems, searchItems } from '../../requests/requests';
import { ArtworksItem, getArtworksItemsResponse } from '../../types/types';
import {
  setDetailsContent,
  setIsDetailsLoading,
} from '../reducers/details-slice';
import {
  setResultsItems,
  setisLoading,
  setPagesNumber,
} from '../reducers/main-slice';
import { AppDispatch } from '../store';

export const fetchResultItems =
  (value: string, page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setisLoading());
      const searchResponse =
        value === ''
          ? ((await getItems(page)) as getArtworksItemsResponse)
          : ((await searchItems(value, page)) as getArtworksItemsResponse);
      const pagesNumber = searchResponse.pagination.total_pages;
      dispatch(setPagesNumber(pagesNumber));
      const artworks: ArtworksItem[] = searchResponse.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail?.alt_text || 'No description',
      }));
      dispatch(setResultsItems(itemsInfo));
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

export const fetchResultDetails =
  (value: string, page: number, itemIndex: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsDetailsLoading());
      const searchResponse =
        value === ''
          ? ((await getItems(page)) as getArtworksItemsResponse)
          : ((await searchItems(value, page)) as getArtworksItemsResponse);
      const currentItem = searchResponse.data[itemIndex];
      dispatch(
        setDetailsContent([currentItem.title, currentItem.thumbnail.alt_text])
      );
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };
