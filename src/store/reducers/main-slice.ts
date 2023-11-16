import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MainState {
  resultsItemInfo: ResultsItem[];
  isLoading: boolean;
  paginationCount: number;
  searchInputValue: string;
}

type ResultsItem = {
  title: string;
  description: string;
};

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
    setResultsItems: (state, action: PayloadAction<ResultsItem[]>) => {
      state.resultsItemInfo = action.payload;
      state.isLoading = false;
    },
    setisLoading: (state) => {
      state.isLoading = true;
    },
    setPagesNumber: (state, action: PayloadAction<number>) => {
      state.paginationCount = action.payload;
    },
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
  },
});

export const {
  setResultsItems,
  setisLoading,
  setPagesNumber,
  setSearchInputValue,
} = mainSlice.actions;

export default mainSlice.reducer;
