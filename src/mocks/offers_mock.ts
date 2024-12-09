import {Offers, OfferType} from '../types/offer.ts';
import {cities} from './cities.ts';

export const offersMock: Offers = [
  // Amsterdam
  {
    id: '1',
    previewImage: 'img/apartment-01.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    rating: 4.6,
    isFavorite: true,
    type: OfferType.Apartment,
    price: 40,
    city: cities[3],
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10 },
  },
  {
    id: '2',
    previewImage: 'img/apartment-02.jpg',
    title: 'Just a room, nothing special',
    isPremium: true,
    rating: 2.1,
    isFavorite: false,
    type: OfferType.Room,
    price: 20,
    city: cities[3],
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 10 },
  },
  {
    id: '3',
    previewImage: 'img/apartment-03.jpg',
    title: 'Cozy house near the lake',
    isPremium: false,
    rating: 3.8,
    isFavorite: false,
    type: OfferType.House,
    price: 50,
    city: cities[3],
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 10},
  },
  {
    id: '4',
    previewImage: 'img/apartment-small-04.jpg',
    title: 'Spacious apartment with city view',
    isPremium: true,
    rating: 4.2,
    isFavorite: false,
    type: OfferType.Apartment,
    price: 30,
    city: cities[3],
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 10 },
  },

  // Paris
  {
    id: '5',
    previewImage: 'img/apartment-01.jpg',
    title: 'Charming apartment in the heart of Paris',
    isPremium: false,
    rating: 4.0,
    isFavorite: true,
    type: OfferType.Apartment,
    price: 60,
    city: cities[0],
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
  },
  {
    id: '6',
    previewImage: 'img/apartment-02.jpg',
    title: 'Luxurious room with Eiffel Tower view',
    isPremium: true,
    rating: 4.8,
    isFavorite: false,
    type: OfferType.Room,
    price: 80,
    city: cities[0],
    location: { latitude: 48.8584, longitude: 2.2945, zoom: 10 },
  },

  // Cologne
  {
    id: '7',
    previewImage: 'img/apartment-01.jpg',
    title: 'Modern apartment near the Rhine River',
    isPremium: false,
    rating: 3.5,
    isFavorite: true,
    type: OfferType.Apartment,
    price: 55,
    city: cities[1],
    location: { latitude: 50.9375, longitude: 6.9603, zoom: 10 },
  },
  {
    id: '8',
    previewImage: 'img/apartment-02.jpg',
    title: 'Cozy room in the city center',
    isPremium: false,
    rating: 3.9,
    isFavorite: false,
    type: OfferType.Room,
    price: 45,
    city: cities[1],
    location: { latitude: 50.9414, longitude: 6.9583, zoom: 10 },
  },

  // Brussels
  {
    id: '9',
    previewImage: 'img/apartment-01.jpg',
    title: 'Elegant house in a quiet neighborhood',
    isPremium: true,
    rating: 4.5,
    isFavorite: true,
    type: OfferType.House,
    price: 70,
    city: cities[2],
    location: { latitude: 50.8503, longitude: 4.3517, zoom: 10 },
  },
  {
    id: '10',
    previewImage: 'img/apartment-02.jpg',
    title: 'Spacious apartment with a garden',
    isPremium: false,
    rating: 4.1,
    isFavorite: false,
    type: OfferType.Apartment,
    price: 65,
    city: cities[2],
    location: { latitude: 50.8466, longitude: 4.3571, zoom: 10 },
  },

  // Hamburg
  {
    id: '11',
    previewImage: 'img/apartment-01.jpg',
    title: 'Stylish apartment near the harbor',
    isPremium: true,
    rating: 4.7,
    isFavorite: true,
    type: OfferType.Apartment,
    price: 75,
    city: cities[4],
    location: { latitude: 53.5511, longitude: 9.9937, zoom: 10 },
  },
  {
    id: '12',
    previewImage: 'img/apartment-02.jpg',
    title: 'Comfortable room with a view',
    isPremium: false,
    rating: 3.7,
    isFavorite: false,
    type: OfferType.Room,
    price: 50,
    city: cities[4],
    location: { latitude: 53.5547, longitude: 10.0018, zoom: 10 },
  },

  // Dusseldorf
  {
    id: '13',
    previewImage: 'img/apartment-01.jpg',
    title: 'Luxurious apartment in the city center',
    isPremium: true,
    rating: 4.9,
    isFavorite: true,
    type: OfferType.Apartment,
    price: 85,
    city: cities[5],
    location: { latitude: 51.2277, longitude: 6.7735, zoom: 10 },
  },
  {
    id: '14',
    previewImage: 'img/apartment-02.jpg',
    title: 'Cozy room near the river',
    isPremium: false,
    rating: 3.6,
    isFavorite: false,
    type: OfferType.Room,
    price: 40,
    city: cities[5],
    location: { latitude: 51.2217, longitude: 6.7765, zoom: 10 },
  },
];
