import {Reviews} from './review.ts';

export type Coordinates = [string, string];

export type Offer = {
  src: string;
  name: string;
  rating: number;
  isFavorite: boolean;
  coordinates: Coordinates;
  reviews: Reviews;
};

export type Offers = Offer[];
