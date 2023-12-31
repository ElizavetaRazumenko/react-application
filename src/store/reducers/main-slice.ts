import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MainState {
  resultsItemInfo: ResultsItem[];
  isMainLoading: boolean;
  paginationCount: number;
  searchInputValue: string;
  currentPage: number;
}

type ResultsItem = {
  title: string;
  description: string;
  id: number;
};

const initialState: MainState = {
  resultsItemInfo: [{ title: '', description: '', id: 11111 }],
  isMainLoading: false,
  paginationCount: 0,
  searchInputValue: localStorage.getItem('Input value') || '',
  currentPage: +location.pathname.slice(-1),
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
  },
});

export const {
  setResultsItems,
  setisLoading,
  setPagesNumber,
  setSearchInputValue,
  setCurrentPage,
} = mainSlice.actions;

export default mainSlice.reducer;
