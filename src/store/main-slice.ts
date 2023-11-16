import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { resultsItemType } from '../types/types';

interface MainState {
  resultsItemInfo: resultsItemType;
  isLoading: boolean;
  paginationCount: number;
  searchInputValue: string;
}

const initialState: MainState = {
  resultsItemInfo: [],
  isLoading: false,
  paginationCount: 0,
  searchInputValue: localStorage.getItem('Input value') || '',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resultsItems: (state, action: PayloadAction<resultsItemType>) => {
      state.resultsItemInfo = action.payload;
    },
    isLoading: (state) => {
      state.isLoading = true;
    },
    isNotLoading: (state) => {
      state.isLoading = false;
    },
    pagesNumber: (state, action: PayloadAction<number>) => {
      state.paginationCount = action.payload;
    },
    searchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
  },
});

export const {
  resultsItems,
  isLoading,
  isNotLoading,
  pagesNumber,
  searchInputValue,
} = mainSlice.actions;

export default mainSlice.reducer;
