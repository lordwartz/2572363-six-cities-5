import {Offers} from '../types/offer.ts';

import {SortOption} from '../components/sort-options/sort-option.ts';

export const getOffersByCity = (cityName: string, offers: Offers) =>
  offers.filter((offer) => offer.city === cityName);

export const sortOffers = (offers: Offers, sortOption: SortOption) => {
  const sortedOffers = [...offers];
  switch (sortOption) {
    case SortOption.Popular:
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers.sort((a, b) => a.pricePerNight - b.pricePerNight);
      break;
    case SortOption.PriceHighToLow:
      sortedOffers.sort((a, b) => b.pricePerNight - a.pricePerNight);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return sortedOffers;
};
