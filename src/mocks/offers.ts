import {Offers} from '../types/offer.ts';
import {reviews} from './reviews.ts';

export const offers: Offers = [
  {
    name: 'first',
    rating: 3,
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
    isFavorite: false,
    coordinates: ['1.2342', '2.23525'],
    reviews: [reviews[0]],
  },
];
