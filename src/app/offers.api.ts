import {Offers} from '../types/offer.ts';

export const getOffersByCity = (cityName: string, offers: Offers) =>
  offers.filter((offer) => offer.city === cityName);
