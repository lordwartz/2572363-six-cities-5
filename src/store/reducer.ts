import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action.ts';
import {citiesMock} from '../mocks/citiesMock.ts';
import {offersMock} from '../mocks/offers_mock.ts';

const initialState = {
  city: citiesMock[0],
  offers: offersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  });
});
