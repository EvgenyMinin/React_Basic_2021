import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getStatus } from './ActionCreators';

interface StatusState {
  status: string;
  isLoading: boolean;
  error: string;
}

const initialState: StatusState = {
  status: '',
  isLoading: false,
  error: '',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
  extraReducers: {
    [getStatus.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      state.status = action.payload;
    },
    [getStatus.pending.type]: state => {
      state.isLoading = true;
    },
    [getStatus.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default statusSlice.reducer;
