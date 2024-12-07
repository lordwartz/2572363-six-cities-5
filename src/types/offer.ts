import {Reviews} from './review.ts';
import {Amenities} from './amenities.ts';

export type Coordinates = {
  lat: number;
  lng: number;
};

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export type Offer = {
  id: number;
  image: string;
  isPremium: boolean;
  pricePerNight: number;
  title: string;
  type: OfferType;
  isFavorite: boolean;
  rating: number;
  city: string;
  coordinates: Coordinates;
};

export type DetailedOffer = Offer & {
  reviews: Reviews;
  images: string[];
  description: string;
  bedroomsCount: number;
  naxCapacity: number;
  amenities: Amenities;
}

export type Offers = Offer[];
