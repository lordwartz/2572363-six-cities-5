import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, requireAuthorization, setCity} from './action.ts';
import {cities} from '../mocks/cities.ts';
import {Offers} from '../types/offer.ts';
import {City} from '../types/map.ts';
import {AuthorizationStatus} from '../const.ts';

type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
}

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});
