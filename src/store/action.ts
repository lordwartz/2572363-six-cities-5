import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map.ts';
import {Offers} from '../types/offer.ts';

export const setCity = createAction('setCity', (value: City) => ({payload: value}));

export const setOffers = createAction('setOffers', (value: Offers) => ({payload: value}));
