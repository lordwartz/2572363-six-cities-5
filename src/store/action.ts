import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map.ts';
import {Offers} from '../types/offer.ts';
import {AuthorizationStatus} from '../const.ts';
import {User} from '../types/user.ts';

export const setCity = createAction('data/setCity', (value: City) => ({payload: value}));

export const setOffers = createAction<Offers>('data/setOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const authorizeUser = createAction<User>('user/authorize');

export const clearUserData = createAction('user/clearData');

export const setUserData = createAction<User>('user/setData');
