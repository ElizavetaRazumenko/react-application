import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MainState {
  resultsItemInfo: ResultsItem[];
  isMainLoading: boolean;
  paginationCount: number;
  searchInputValue: string;
  currentPage: number;
  artworksCount: number;
  artworksCountView: number;
  currentMaxPageRange: number;
}

type ResultsItem = {
  title: string;
  description: string;
  id: number;
};

const initialState: MainState = {
  resultsItemInfo: [
    { title: 'New Page', description: '', id: 11111 },
    { title: 'Something', description: '', id: 11112 },
    { title: 'Tralalala', description: '', id: 11112 },
    { title: 'Something', description: '', id: 11112 },
  ],
  isMainLoading: false,
  paginationCount: 15,
  searchInputValue: '',
  currentPage: 1,
  artworksCount: 12,
  artworksCountView: 12,
  currentMaxPageRange: 10,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setResultsItems: (state, action: PayloadAction<ResultsItem[]>) => {
      state.resultsItemInfo = action.payload;
      state.isMainLoading = false;
    },
    setisLoading: (state, action: PayloadAction<boolean>) => {
      state.isMainLoading = action.payload;
    },
    setPagesNumber: (state, action: PayloadAction<number>) => {
      state.paginationCount = action.payload;
    },
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setArtworksCount: (state, action: PayloadAction<number>) => {
      state.artworksCount = action.payload;
    },
    setArtworksCountView: (state, action: PayloadAction<number>) => {
      state.artworksCountView = action.payload;
    },
    setCurrentMaxPageRange: (state, action: PayloadAction<number>) => {
      state.currentMaxPageRange = action.payload;
    },
  },
});

export const {
  setResultsItems,
  setisLoading,
  setPagesNumber,
  setSearchInputValue,
  setCurrentPage,
  setArtworksCount,
  setArtworksCountView,
  setCurrentMaxPageRange,
} = mainSlice.actions;

export default mainSlice.reducer;
