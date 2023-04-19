import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Persons from './Persons';
import Form from './Form';
import { personsAPI } from '../services/PersonsService';

const rootReducers = combineReducers({
  Persons,
  Form,
  [personsAPI.reducerPath]: personsAPI.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(personsAPI.middleware),
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
