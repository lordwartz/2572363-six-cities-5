import {Offers, OfferType} from '../types/offer.ts';

export const offers: Offers = [
  {
    id: 1,
    image: 'img/apartment-01.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    rating: 4.6,
    isFavorite: true,
    type: OfferType.Apartment,
    pricePerNight: 40,
  },
  {
    id: 2,
    image: 'img/apartment-02.jpg',
    title: 'Just a room, nothing special',
    isPremium: true,
    rating: 2.1,
    isFavorite: false,
    type: OfferType.Room,
    pricePerNight: 20,
  },
  {
    id: 3,
    image: 'img/apartment-03.jpg',
    title: 'Cozy house near the lake',
    isPremium: false,
    rating: 3.8,
    isFavorite: true,
    type: OfferType.House,
    pricePerNight: 50,
  },
  {
    id: 4,
    image: 'img/apartment-small-04.jpg',
    title: 'Spacious apartment with city view',
    isPremium: true,
    rating: 4.2,
    isFavorite: false,
    type: OfferType.Apartment,
    pricePerNight: 30,
  },
];
