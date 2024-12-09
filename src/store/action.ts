import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map.ts';
import {Offers} from '../types/offer.ts';
import {AuthorizationStatus} from '../const.ts';

export const setCity = createAction('data/setCity', (value: City) => ({payload: value}));

export const setOffers = createAction('data/setOffers', (value: Offers) => ({payload: value}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
