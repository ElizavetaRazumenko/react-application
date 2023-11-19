import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DetailsState {
  currentId: number;
  isDetailsLoading: boolean;
  detailsContent: string[];
}

const initialState: DetailsState = {
  currentId: 59843,
  isDetailsLoading: false,
  detailsContent: ['', ''],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setIsDetailsLoading: (state) => {
      state.isDetailsLoading = true;
    },
    setDetailsContent: (state, action: PayloadAction<string[]>) => {
      state.detailsContent = action.payload;
      state.isDetailsLoading = false;
    },
    setDetailsIndex: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
  },
});

export const { setIsDetailsLoading, setDetailsContent, setDetailsIndex } =
  detailsSlice.actions;

export default detailsSlice.reducer;
