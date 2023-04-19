/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IState {
  searchValue: string;
}

const initialState: IState = {
  searchValue: '',
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
  },
});
export const { setSearchValue } = personsSlice.actions;
export default personsSlice.reducer;
