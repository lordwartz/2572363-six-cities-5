import {Reviews} from './review.ts';
import {Amenities} from './amenities.ts';
import {City} from './map.ts';

export type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export type Offer = {
  id: string;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: OfferType;
  isFavorite: boolean;
  rating: number;
  city: City;
  location: Coordinates;
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
