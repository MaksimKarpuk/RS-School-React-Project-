/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { IValues } from '../interfaces';

interface IState {
  cards: IValues[];
  popup: boolean;
}

const initialState: IState = {
  cards: [],
  popup: false,
};

export const formSlice = createSlice({
  name: 'FormCards',
  initialState,
  reducers: {
    setVisiblePopup(state, { payload }) {
      state.popup = payload;
    },
    setUnvisiblePopup(state, { payload }) {
      state.popup = payload;
    },
    addFormCard(state, { payload }) {
      const values: IValues = {
        id: uuid(),
        checkbox: payload.checkbox,
        city: payload.city,
        date: payload.date,
        file: payload.file,
        firstName: payload.firstName,
        radio: payload.radio,
        secondName: payload.secondName,
      };
      state.cards.push(values);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    getCardsFromLocalStorage(state) {
      const initialCards = localStorage.getItem('cards');
      if (initialCards) {
        state.cards = JSON.parse(initialCards);
      }
    },
  },
});
export const { setVisiblePopup, setUnvisiblePopup, addFormCard, getCardsFromLocalStorage } =
  formSlice.actions;
export default formSlice.reducer;
