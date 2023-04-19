/* eslint-disable import/no-named-as-default */
import { describe } from 'vitest';
import uuid from 'react-uuid';
import formSlice, {
  setVisiblePopup,
  setUnvisiblePopup,
  addFormCard,
  getCardsFromLocalStorage,
} from './Form';

describe('redux from test', () => {
  it('setVisiblePopup', () => {
    const state = {
      cards: [],
      popup: false,
    };
    const action = { type: setVisiblePopup.type, payload: true };
    const result = formSlice(state, action);
    expect(result.cards).toEqual([]);
    expect(result.popup).toBe(true);
  });
  it('setUnvisiblePopup', () => {
    const state = {
      cards: [],
      popup: false,
    };
    const action = { type: setUnvisiblePopup.type, payload: false };
    const result = formSlice(state, action);
    expect(result.cards).toEqual([]);
    expect(result.popup).toBe(false);
  });
  it('addFormCards', () => {
    const state = {
      cards: [],
      popup: false,
    };
    const card = {
      id: uuid(),
      checkbox: true,
      city: 'Brest',
      date: '2023-04-09',
      file: '',
      firstName: 'Max',
      radio: 'Male',
      secondName: 'Karpuk',
    };
    const action = { type: addFormCard.type, payload: card };
    const result = formSlice(state, action);
    expect(result.cards[0].city).toBe('Brest');
    expect(result.cards[0].firstName).toBe('Max');
    expect(result.cards[0].radio).toBe('Male');
    expect(result.cards[0].secondName).toBe('Karpuk');
    expect(result.cards[0].date).toBe('2023-04-09');
    expect(result.cards[0].checkbox).toBe(true);
  });
});
